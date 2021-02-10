<template>
  <div tabindex="-1">
    <router-link
      class="skip-link"
      to="#main-content"
      @click.native="scrollFix('#main-content')"
    >
      Aller au contenu principal
    </router-link>
    <SiteHeader />

    <main id="main-content">
      <Nuxt />
    </main>

    <SiteFooter />

    <Toaster />
  </div>
</template>

<script>
import ToastProviderMixin from '@/mixins/toast-provider'

export default {
  name: 'DefaultLayout',
  mixins: [ToastProviderMixin],
  watch: {
    // reset page focus on route change
    $route(to) {
      this.$el.focus()
    }
  },
  methods: {
    // in some cases, the page doesnt scroll to the content, this fixes it
    scrollFix(hash) {
      window.location.hash = hash
    }
  }
}
</script>

<style lang="scss">
.skip-link {
  position: fixed;
  margin: 1rem;
  padding: 1rem;
  background-color: $color-white;
  opacity: 0;

  &:focus {
    opacity: 1;
  }
}
</style>
