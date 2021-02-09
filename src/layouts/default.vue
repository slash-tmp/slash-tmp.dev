<template>
  <div tabindex="-1">
    <SiteHeader />

    <main>
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
    $route() {
      this.$el.focus()
    }
  }
}
</script>
