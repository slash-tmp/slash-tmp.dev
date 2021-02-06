/* Global variables */
const baseUrl = process.env.DEPLOY_PRIME_URL || 'http://localhost:3000'
const title = 'Petit studio de développement et de qualité web'
const description =
  "/tmp c'est deux développeurs : Adrien et Quentin. On code des sites web sur mesure et on fait de la qualité web."

/**
 * Generate dynamic routes for sitemap
 */
async function getSitemapRoutes() {
  const { $content } = require('@nuxt/content')
  const files = await $content('blog').only(['path']).fetch()
  return files.map(file => file.path)
}

/**
 * Configure `@nuxtjs/feed`
 * @returns A config object for `@nuxtjs/feed`
 */
async function configureFeed() {
  // we fetch blog posts outside of the feed creation function to avoid
  // "fetching" the same thing 3 times
  const { $content } = require('@nuxt/content')
  const blogs = await $content('blog').sortBy('createdAt', 'desc').fetch()

  /** Configure a single feed object. */
  function createFeed(feed) {
    // channel options
    feed.options = {
      id: baseUrl,
      title: '/tmp - Blog',
      link: baseUrl,
      description,
      language: 'fr-FR',
      image: `${baseUrl}/og.jpg`,
      favicon: `${baseUrl}/favicon.png`
    }

    // add articles to the feed
    blogs.forEach(blog => {
      feed.addItem({
        id: blog.slug,
        link: `${baseUrl}/blog/${blog.slug}`,
        title: blog.title,
        description: blog.description,
        date: new Date(blog.createdAt)
      })
    })
  }

  const cacheTime = 1000 * 60 * 60 * 24 // 24 hours cache

  return [
    {
      type: 'rss2',
      path: '/feed.xml',
      create: createFeed,
      cacheTime
    },
    {
      type: 'atom1',
      path: '/feed.atom',
      create: createFeed,
      cacheTime
    },
    {
      type: 'json1',
      path: '/feed.json',
      create: createFeed,
      cacheTime
    }
  ]
}

/**
 * Nuxt config
 */
export default {
  env: {
    baseUrl
  },
  target: 'static',
  modern: process.env.NODE_ENV === 'production' && 'client',
  srcDir: 'src/',
  head: {
    title,
    titleTemplate: '%s - /tmp',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', name: 'og:title', content: title },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      { hid: 'og:url', name: 'og:url', content: baseUrl },
      { hid: 'og:image', name: 'og:image', content: '/og.jpg' },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:image', name: 'twitter:image', content: '/og.jpg' },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: '/tmp écrit en blanc et centré sur un fond violet.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

      // Links to the blog feeds (RSS, ATOM and JSON)
      {
        rel: 'alternate',
        title: 'Flux RSS du blog /tmp',
        type: 'application/rss+xml',
        href: '/feed.xml'
      },
      {
        rel: 'alternate',
        title: 'Flux JSON du blog /tmp',
        type: 'application/json',
        href: '/feed.json'
      },
      {
        rel: 'alternate',
        title: 'Flux ATOM du blog /tmp',
        type: 'application/atom+xml',
        href: '/feed.atom'
      }
    ]
  },
  generate: {
    fallback: true
  },
  css: ['@/assets/scss/index'],
  components: true,
  buildModules: ['@nuxtjs/style-resources', '@aceforth/nuxt-optimized-images'],
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/feed'],
  content: {
    liveEdit: false,
    markdown: {
      // Override headings links rendering
      remarkAutolinkHeadings: {
        linkProperties: {},
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['visually-hidden'] },
          children: [{ type: 'text', value: 'Lien vers la section' }]
        }
      }
    }
  },
  styleResources: { scss: '@/assets/scss/_variables.scss' },
  sitemap: {
    hostname: baseUrl,
    routes() {
      return getSitemapRoutes()
    }
  },
  optimizedImages: {
    optimizeImages: true
  },
  feed: configureFeed
}
