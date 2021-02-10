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
$shadow-color: rgba(mix($color-purple, $color-black, $weight: 5%), 0.1);

.skip-link {
  position: fixed;
  margin: 1rem;
  padding: 1rem;
  background-color: $color-white;
  opacity: 0;
  top: -100%;
  color: $color-purple;
  z-index: 1;
  border-radius: 0.5rem;
  outline: none;
  box-shadow: 0 0.25rem 0.25rem 0 $shadow-color,
    0 -0.124rem 0.25rem 0 $shadow-color;

  &:focus {
    opacity: 1;
    top: initial;
  }
}
</style>
