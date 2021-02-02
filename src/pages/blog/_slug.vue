<template>
  <article>
    <Hero tag="header">
      <h1>{{ article.title }}</h1>
      Écrit le <time>{{ article.createdAt }}</time>
    </Hero>
    <nuxt-content :document="article" class="container container--small" />
  </article>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'

export default {
  name: 'Blog',
  async asyncData({ $content, params }) {
    const slug = params.slug
    const article = await $content('blog', slug).fetch()

    return {
      article
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
