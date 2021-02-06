<template>
  <div class="blog">
    <Hero tag="header">
      <h1 class="blog__title">{{ title }}</h1>
      <p>
        {{ description }} Comme on ne vous promet pas une fréquence régulière,
        vous pouvez vous abonner au flux RSS sous différents formats :
        <nuxt-link to="/feed.xml">
          <span class="visually-hidden">flux RSS au format</span
          ><code>.xml</code>
        </nuxt-link>
        ,
        <nuxt-link to="/feed.atom">
          <span class="visually-hidden">flux RSS au format</span
          ><code>.atom</code>
        </nuxt-link>
        et
        <nuxt-link to="/feed.json">
          <span class="visually-hidden">flux RSS au format</span
          ><code>.json</code> </nuxt-link
        >.
      </p>
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
