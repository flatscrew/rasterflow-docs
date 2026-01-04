import { defineContentConfig, defineCollection, z, property } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**'
      },
      schema: z.object({
        version: z.string(),
        releaseDate: z.string()
      })
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md', 'pages/**', '3.blog/**', '4.changelog/**']
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    }),
    blog: defineCollection({
      source: 'blog/index.yml',
      type: 'page'
    }),
    posts: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        image: z.object({ src: property(z.string()).editor({ input: 'media' }) }),
        authors: z.array(
          z.object({
            name: z.string().nonempty(),
            to: z.string().nonempty(),
            avatar: z.object({ src: property(z.string()).editor({ input: 'media' }) })
          })
        ),
        date: z.date(),
        badge: z.object({ label: z.string().nonempty() })
      })
    }),
    changelog: defineCollection({
      source: 'changelog/index.yml',
      type: 'page'
    }),
    versions: defineCollection({
      source: 'changelog/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string(),
        date: z.date(),
        badge: z.string(),
        to: z.string()
      })
    })
  }
})
