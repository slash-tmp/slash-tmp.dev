<template>
  <div class="home-page">
    <div class="home-page__section--dark">
      <HomeHero class="home-page__hero" />
      <HomeQuality />
    </div>
    <HomeServices class="home-page__services" />
    <HomeProjects class="home-page__projects" :projects="projects" />
    <!-- <HomeAuditForm class="home-page__audit-form" /> -->
  </div>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta.js'
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'Index',
  mixins: [AnnouncedPageMixin],
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()
    return { projects: projects.filter(p => !p.archived) }
  },
  data() {
    return {
      title: 'Petit studio web — développement et qualité',
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
      @include dark-background;

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

    @media (max-width: $breakpoint-medium) {
      margin-bottom: $spacing * 10;
    }
  }

  &__projects {
    margin-bottom: $spacing * 23;

    @media (max-width: $breakpoint-medium) {
      margin-bottom: $spacing * 10;
    }
  }

  &__audit-form {
    margin-bottom: $spacing * 10;

    @media (max-width: $breakpoint-medium) {
      margin-bottom: $spacing * 10;
    }
  }
}
</style>
