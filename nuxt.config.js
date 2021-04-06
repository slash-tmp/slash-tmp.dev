import highlightjs from 'highlight.js'

/* Global variables */
const baseUrl =
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL || 'http://localhost:3000'
const title = 'Petit studio web — développement et qualité'
const description =
  "/tmp c'est deux développeurs : Adrien et Quentin. On code des sites web sur mesure et on fait de la qualité web."
const email = 'contact@slash-tmp.dev'

/**
 * Generate dynamic routes for sitemap
 */
async function getSitemapRoutes() {
  const { $content } = require('@nuxt/content')
  const files = await $content('blog')
    .where({ published: true })
    .only(['path'])
    .fetch()
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
  const articles = await $content('blog')
    .where({ published: true })
    .sortBy('createdAt', 'desc')
    .fetch()

  /** Configure a single feed object. */
  function createFeed(feed) {
    // channel options
    feed.options = {
      id: baseUrl,
      title: '/tmp - Blog',
      link: baseUrl,
      description:
        "On y écrit des articles pour parler du studio, de développement web, de code, d'accessibilité et de qualité web.",
      language: 'fr-FR',
      image: `${baseUrl}/og.jpg`,
      favicon: `${baseUrl}/favicon.svg`
    }

    // add articles to the feed
    articles.forEach(article => {
      feed.addItem({
        id: article.slug,
        link: `${baseUrl}/blog/${article.slug}`,
        title: article.title,
        description: article.description,
        date: new Date(article.createdAt)
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
    baseUrl,
    email
  },
  target: 'static',
  modern: process.env.NODE_ENV === 'production' && 'client',
  srcDir: 'src/',
  render: {
    // add Content-Security-Policy meta to the header
    csp: true
  },
  head: {
    title,
    titleTemplate: '%s - /tmp',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#221B2B' },

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
        content: '/tmp écrit en jaune et rose et centré sur un fond noir.'
      }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href:
          process.env.NODE_ENV === 'development'
            ? '/favicon-dev.svg'
            : '/favicon.svg'
      },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },

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
  styleResources: {
    scss: ['@/assets/scss/_variables.scss', '@/assets/scss/_mixins.scss']
  },
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
      },
      // Custom highlight.js theme
      highlighter(rawCode, lang) {
        const highlightedCode = highlightjs.highlight(lang, rawCode).value

        return `<pre><code tabindex="0" class="hljs ${lang}">${highlightedCode}</code></pre>`
      }
    }
  },
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
