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

<style lang="scss">
.default-layout {
  &__header {
    margin-bottom: 4rem;
  }
}
</style>
