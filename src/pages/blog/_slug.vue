<template>
  <article class="blog-slug">blog/_slug</article>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'
import formatDate from '@/helpers/formatDate'
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'BlogSlug',
  mixins: [AnnouncedPageMixin],
  async asyncData({ $content, params, error }) {
    const slug = params.slug
    const article = await $content('blog', slug)
      .fetch()
      .catch(() => error({ statusCode: 404 }))

    return {
      article,
      title: article.title
    }
  },
  head() {
    return setPageMeta(
      this.article.title,
      this.article.description,
      this.$route.path
    )
  },
  computed: {
    formattedDate() {
      return formatDate(this.article.date)
    }
  }
}
</script>
