<template>
  <div class="default-layout" tabindex="-1">
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>

    <SiteHeader />

    <main id="main-content">
      <Nuxt />
    </main>

    <SiteFooter />
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
.default-layout {
  position: relative;
}

.skip-link {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: $color-text-light;
  top: $spacing;
  left: -999rem;
  padding: $spacing * 2;
  color: $color-text-dark;
  font-family: $font-family-sans-serif;

  &:focus {
    opacity: 1;
    left: $spacing;
  }
}
</style>
