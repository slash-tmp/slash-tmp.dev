<template>
  <div>
    <SiteHeader class="default-layout__header" />

    <main>
      <Nuxt />
    </main>

    <SiteFooter />

    <Toaster />
  </div>
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
    notifications: [],
    automaticDismissTimeoutId: null
  }),
  methods: {
    notify(text) {
      clearTimeout(this.automaticDismissTimeoutId)

      this.dismissNotification()
      this.notifications.push({
        id: this.nextNotificationId,
        text
      })
      this.nextNotificationId++

      this.automaticDismissTimeoutId = setTimeout(
        this.dismissNotification,
        8000
      )
    },
    dismissNotification() {
      this.notifications.splice(0, this.notifications.length)
    }
  }
}
</script>
