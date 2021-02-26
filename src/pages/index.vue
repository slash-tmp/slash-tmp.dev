<template>
  <div class="home-page">
    <div class="home-page__section--dark">
      <HomeHero class="home-page__hero" />
      <HomeQuality />
    </div>
    <HomeServices class="home-page__services" />
  </div>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta.js'
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'Index',
  mixins: [AnnouncedPageMixin],
  data() {
    return {
      title: 'Petit studio de développement et de qualité web',
      description:
        "/tmp c'est deux développeurs : Adrien et Quentin. On code des sites web sur mesure et on fait de la qualité web."
    }
  },
  head() {
    return setPageMeta(this.title, this.description, this.$route.path)
  }
}
</script>

<style lang="scss">
.home-page {
  &__section {
    &--dark {
      background: $gradient-background-dark;
      margin-bottom: $spacing * 15;
      padding: $spacing * 8 0 $spacing * 15;

      @media (max-width: $breakpoint-medium) {
        margin-bottom: $spacing * 10;
        padding: $spacing * 8 0 $spacing * 10;
      }
    }
  }

  &__hero {
    margin-bottom: $spacing * 17;

    @media (max-width: $breakpoint-medium) {
      margin-bottom: $spacing * 10;
    }
  }

  &__services {
    margin-bottom: $spacing * 23;
  }
}
</style>
