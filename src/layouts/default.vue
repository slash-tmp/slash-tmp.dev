<template>
  <div>
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
  mixins: [ToastProviderMixin]
}
</script>
