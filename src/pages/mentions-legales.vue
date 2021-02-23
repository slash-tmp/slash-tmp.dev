<template>
  <LegalHero />
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
