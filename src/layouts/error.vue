<template>
  <article>
    <Hero tag="header">
      <h1>{{ title }}</h1>
    </Hero>

    <ErrorSection :code="error.statusCode" />
  </article>
</template>

<script>
import AnnouncedPageMixin from '@/mixins/announced-page'

export default {
  name: 'Error',
  mixins: [AnnouncedPageMixin],
  props: {
    error: {
      type: Object,
      default: () => {
        return { statusCode: 404 }
      }
    }
  },
  data() {
    return {
      title: this.error.statusCode === 404 ? 'Page introuvable' : 'Erreur'
    }
  }
}
</script>
