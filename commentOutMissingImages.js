#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const cwd = process.cwd()
const defaultContentDir = path.join(cwd, 'content', 'operations')
const fallbackContentDir = path.join(cwd, 'content', '2.operations')
const requestedContentDir = process.argv[2]
  ? path.join(cwd, process.argv[2])
  : null

let operationsDir
if (requestedContentDir) {
  operationsDir = requestedContentDir
} else if (fs.existsSync(defaultContentDir)) {
  operationsDir = defaultContentDir
} else if (fs.existsSync(fallbackContentDir)) {
  operationsDir = fallbackContentDir
} else {
  console.error(
    'content/operations and content/2.operations do not exist; pass directory as first argument.'
  )
  process.exit(1)
}

const publicRootArg = process.argv[3] || 'public'
const publicRoot = path.join(cwd, publicRootArg)
// eslint-disable-next-line no-useless-escape
const imagePattern = /\/images\/operations\/[A-Za-z0-9_.\-@%+\/]+/g

if (!fs.existsSync(publicRoot)) {
  console.error(`Public root ${publicRootArg} does not exist.`)
  process.exit(1)
}

/** Recursively collect markdown files under a directory. */
function collectMarkdownFiles(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectMarkdownFiles(entryPath, out)
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      out.push(entryPath)
    }
  }
  return out
}

/** Check whether the referenced image exists in the public root. */
function referencedImageMissing(match) {
  const relative = match.replace(/^\/+/, '')
  const candidate = path.join(publicRoot, relative)
  return !fs.existsSync(candidate)
}

const markdownFiles = collectMarkdownFiles(operationsDir)
let commentedLines = 0
let filesTouched = 0

for (const markdownPath of markdownFiles) {
  const original = fs.readFileSync(markdownPath, 'utf8')
  const lines = original.split(/\r?\n/)
  let mutated = false
  const updated = lines.map((line) => {
    const matches = Array.from(line.matchAll(imagePattern))
    imagePattern.lastIndex = 0
    if (!matches.length) {
      return line
    }
    const trimmed = line.trimStart()
    if (trimmed.startsWith('#') || trimmed.startsWith('<!--')) {
      return line
    }
    const missing = matches.some(({ 0: match }) => referencedImageMissing(match))
    if (!missing) {
      return line
    }
    mutated = true
    commentedLines += 1
    const leading = line.match(/^\s*/)[0]
    return `${leading}# ${trimmed}`
  })

  if (mutated) {
    filesTouched += 1
    fs.writeFileSync(markdownPath, updated.join('\n'))
  }
  imagePattern.lastIndex = 0
}

console.log(
  `scanned ${markdownFiles.length} markdown files in ${operationsDir}; commented ${commentedLines} line(s) across ${filesTouched} file(s).`
)
