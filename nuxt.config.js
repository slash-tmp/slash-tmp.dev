const title = 'Petit studio de développement et de qualité web'
const description =
  "/tmp c'est deux développeurs : Adrien et Quentin. On code des sites web sur mesure et on fait de la qualité web."

export default {
  target: 'static',
  modern: 'client',
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
      { hid: 'og:url', name: 'og:url', content: 'https://slash-tmp.dev' },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  css: ['@/assets/scss/index'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  styleResources: { scss: '@/assets/scss/_variables.scss' },
  sitemap: {
    hostname: 'https://slash-tmp.netlify.app'
  }
}
