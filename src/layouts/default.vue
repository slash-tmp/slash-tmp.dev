<template>
  <div class="default-layout">
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
      // only reset focus on page change (not when going to an anchor on the same page)
      if (from.path !== to.path) {
        /*
          Permanently adding `tabindex="-1"` to the element would break the
          default behaviour of focusing the closest element when clicking anywhere
          on the page. Instead, the focus would be reset to the top of the page 
          every time the user clicked anywhere.

          So, we only set the tabindex attribute when we need to reset the focus
          and then immediately remove it.
        */
        this.$el.setAttribute('tabindex', '-1')
        this.$el.focus()
        this.$el.removeAttribute('tabindex')
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
