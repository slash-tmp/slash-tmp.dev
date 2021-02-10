<template>
  <article>
    <Hero tag="header">
      <h1>{{ page.title }}</h1>
    </Hero>

    <nuxt-content :document="page" class="container container--small" />
  </article>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'Legal',
  mixins: [AnnouncedPageMixin],
  async asyncData({ $content }) {
    const page = await $content('mentions-legales').fetch()

    return {
      page,
      title: page.title
    }
  },
  head() {
    return setPageMeta(this.page.title, this.page.description, this.$route.path)
  }
}
</script>
