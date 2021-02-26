<template>
  <div class="default-layout" tabindex="-1">
    <SiteHeader />
    <!-- <a class="skip-link" href="#main-content">Aller au contenu principal</a> -->
    <!-- <main id="main-content"> -->
    <Nuxt />
    <!-- </main> -->

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
