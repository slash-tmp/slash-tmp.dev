export default {
  target: 'static',
  modern: 'client',
  srcDir: 'src/',
  head: {
    title: 'slash-tmp.dev.two',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    fallback: true
  },
  css: ['@/assets/scss/index'],
  components: true,
  buildModules: ['@nuxtjs/style-resources'],
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  styleResources: { scss: '@/assets/scss/_variables.scss' },
  sitemap: {
    hostname: 'https://slash-tmp.netlify.app'
  }
}
