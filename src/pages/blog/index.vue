<template>
  <div>
    <BlogHero />
  </div>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'Blog',
  mixins: [AnnouncedPageMixin],
  async asyncData({ $content }) {
    // hide unpublished articles only on the production netlify deploy
    // see: https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    const filterUnpublished = process.env.CONTEXT === 'production'

    const articles = await $content('blog')
      .where({
        ...(filterUnpublished && { published: true })
      })
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles
    }
  },
  data() {
    return {
      title: 'Blog',
      description:
        "Bienvenue sur notre blog ! On y écrit des articles pour parler du studio, de développement web, de code, d'accessibilité et de qualité web."
    }
  },
  head() {
    return setPageMeta(this.title, this.description, this.$route.path)
  }
}
</script>
