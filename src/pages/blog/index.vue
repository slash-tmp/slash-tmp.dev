<template>
  <div class="blog">
    <Hero tag="header">
      <h1 class="blog__title">{{ title }}</h1>
      <p>{{ description }}</p>
    </Hero>

    <Articles :articles="articles" />
  </div>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'

export default {
  name: 'Blog',
  async asyncData({ $content }) {
    const articles = await $content('blog').sortBy('date', 'desc').fetch()

    return {
      articles
    }
  },
  data() {
    return {
      title: 'Blog',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae cum minus voluptatem incidunt dolores nostrum, ipsam maiores dolore aut eaque autem sed vel! Odio magni fuga soluta. Odio, ut!'
    }
  },
  head() {
    return setPageMeta(this.title, this.description, this.$route.path)
  }
}
</script>

<style lang="scss">
.blog {
  &__title {
    margin-bottom: 2rem;
  }
}
</style>
