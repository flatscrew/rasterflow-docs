/* eslint-disable @typescript-eslint/no-explicit-any */
const systemVariables = [
  'id',
  'title',
  'body',
  'description',
  'extension',
  'meta',
  'navigation',
  'path',
  'seo',
  'stem',
  '__hash__'
]

function extractCustomVariables(data: object) {
  const keys = Object.entries(data)
  const customVariablesArray = keys.filter(([name]) => !systemVariables.includes(name))

  return Object.fromEntries(customVariablesArray)
}

// written by gemini 2.5 pro
function recursivelyReplaceCustomVariablesInStrings(data: any, replacements: Record<string, string>): any {
  if (data === null || typeof data === 'undefined') {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(item => recursivelyReplaceCustomVariablesInStrings(item, replacements))
  }

  if (typeof data === 'object' && data.constructor === Object) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        recursivelyReplaceCustomVariablesInStrings(value, replacements)
      ])
    )
  }

  if (typeof data === 'string') {
    const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g

    return data.replace(regex, (match, key) => {
      if (Object.prototype.hasOwnProperty.call(replacements, key)) {
        return replacements[key]
      }

      return match
    })
  }

  return data
}

export const fixVariablesInMarkdownObject = (markdownObject: object) => {
  const customVariables = extractCustomVariables(markdownObject)
  return recursivelyReplaceCustomVariablesInStrings(markdownObject, customVariables)
}
