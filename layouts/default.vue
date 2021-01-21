<template>
  <main>
    <header class="container container--full">Logo</header>
    <section class="container container--large" aria-labelledby="hero-section">
      <h1 id="hero-section">/tmp</h1>
    </section>
    <Nuxt />

    <footer class="footer container container--full">
      <div class="footer__wrapper">
        <p class="footer__description">
          /tmp est un petit studio de développement où on code des sites et on
          fait de la qualité web.
        </p>
        <a class="footer__legal" href="#">Mentions légales</a>
        <span class="footer__hello">
          Passez une bonne
          <span id="js-hello-span"
            >journée <span role="img" aria-label="soleil">☀️</span></span
          >
        </span>
      </div>
      <div
        id="js-hello-background"
        class="footer__background background-text"
        aria-hidden="true"
      >
        bonjour
      </div>
    </footer>

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
