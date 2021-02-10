<template>
  <div class="blog">
    <Hero tag="header">
      <h1 class="blog__title">{{ title }}</h1>
      <p>
        {{ description }} Comme on ne vous promet pas une fréquence régulière,
        vous pouvez vous abonner au flux de syndication aux différents formats :
        <nuxt-link to="/feed.xml">
          <span class="visually-hidden">flux de syndication au format</span
          >RSS</nuxt-link
        >,
        <nuxt-link to="/feed.atom">
          <span class="visually-hidden">flux de syndication au format</span
          >Atom</nuxt-link
        >
        et
        <nuxt-link to="/feed.json">
          <span class="visually-hidden">flux de syndication au format</span
          >JSON </nuxt-link
        >.
      </p>
    </Hero>

    <Articles :articles="articles" />
  </div>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'Blog',
  mixins: [AnnouncedPageMixin],
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
        "Bienvenue sur notre blog ! On y écrit des articles pour parler du studio, de développement web, de code et d'accessibilité de qualité web."
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
