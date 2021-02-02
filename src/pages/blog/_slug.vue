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
export default {
  name: 'Blog',
  async asyncData({ $content, params }) {
    const slug = params.slug
    const article = await $content('blog', slug).fetch()

    return {
      article
    }
  }
}
</script>
