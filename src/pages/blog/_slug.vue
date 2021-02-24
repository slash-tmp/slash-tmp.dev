<template>
  <article class="blog-slug">
    <BlogArticleHero :title="title" :date="formattedDate" />
    <Container>
      <Container size="small" alignment="left">
        <NuxtContent class="blog-slug__content" :document="article" />
      </Container>
    </Container>
  </article>
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

<style lang="scss">
.blog-slug {
  &__content {
    --outline-color: #{$color-text-dark};

    padding: $spacing * 10 $spacing * 2;
  }
}
</style>
