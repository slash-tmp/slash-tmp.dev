<template>
  <div>
    <Hero tag="section">
      <PresentationSection />
    </Hero>

    <QualitySection />

    <ServicesSection />

    <ContactSection />
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
