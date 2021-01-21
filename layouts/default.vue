<template>
  <main>
    <header class="container container--full">
      <nuxt-link :to="{ name: 'index' }" id="hero-section">/tmp</nuxt-link>
    </header>

    <Nuxt />

    <SiteFooter />

    <Toaster />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
  provide() {
    return {
      notifications: this.notifications,
      notify: this.notify,
      dismissNotification: this.dismissNotification
    }
  },
  data: () => ({
    nextNotificationId: 0,
    notifications: []
  }),
  methods: {
    notify(text) {
      this.dismissNotification()
      this.notifications.push({
        id: this.nextNotificationId,
        text
      })
      this.nextNotificationId++
    },
    dismissNotification() {
      this.notifications.splice(0, this.notifications.length)
    }
  }
}
</script>
