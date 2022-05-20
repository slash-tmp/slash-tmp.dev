<template>
  <article class="blog-slug">
    <BlogArticleHero
      :title="title"
      :description="article.description"
      :date="article.date"
    />
    <BlogArticle :article="article" />
  </article>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'
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
  }
}
</script>

<style lang="scss">
.blog-slug {
  &__subscribe-form {
    margin-bottom: $spacing * 10;
  }
}
</style>
