<template>
  <article>
    <Hero tag="header">
      <h1>{{ title }}</h1>
    </Hero>
    <LegalSection />
  </article>
</template>

<script>
import setPageMeta from '@/helpers/setPageMeta'

export default {
  name: 'Legal',
  data() {
    return {
      title: 'Mentions légales',
      description:
        "Informations concernant l'identité et les coordonnées de /tmp ainsi que celles de l'hébergeur du site."
    }
  },
  head() {
    return setPageMeta(this.title, this.description, this.$route.path)
  }
}
</script>
