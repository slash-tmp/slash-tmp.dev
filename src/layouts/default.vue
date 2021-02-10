<template>
  <div tabindex="-1">
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>
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
    $route(to, from) {
      if (from.path !== to.path) {
        // only reset focus on page change (not when going to an anchor on the same page)
        this.$el.focus()
      }
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
  top: -100%;

  &:focus {
    opacity: 1;
    top: initial;
  }
}
</style>
