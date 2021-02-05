<template>
  <article class="blog-slug">
    <Hero tag="header">
      <h1 class="blog-slug__title">{{ article.title }}</h1>
      <div class="blog-slug__date">
        Écrit le <time>{{ formattedDate }}</time>
      </div>
      <NuxtLink class="blog-slug__back" :to="{ name: 'blog' }">
        <ArrowLeftIcon class="blog-slug__backIcon" />
        Retour à la liste des articles
      </NuxtLink>
    </Hero>
    <nuxt-content :document="article" class="container container--small" />
  </article>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'
import formatDate from '@/helpers/formatDate'

export default {
  name: 'BlogSlug',
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
  },
  computed: {
    formattedDate() {
      return formatDate(this.article.createdAt)
    }
  }
}
</script>

<style lang="scss">
.blog-slug {
  &__title {
    margin-bottom: 2rem;
  }

  &__date {
    margin-bottom: 0.5rem;
  }

  &__back {
    color: $color-white;
    display: inline-flex;
    align-items: center;
    justify-items: flex-start;
  }

  &__backIcon {
    margin-right: 0.5rem;
  }
}
</style>
