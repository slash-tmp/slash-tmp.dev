<template>
  <div class="toaster" role="alert" aria-live="polite">
    <transition name="slide">
      <Toast
        v-if="lastNotification && !lastNotification.visuallyHidden"
        :key="lastNotification.id"
        @dismiss="dismissNotification"
      >
        {{ lastNotification.text }}
      </Toast>
      <p
        v-else-if="lastNotification && lastNotification.visuallyHidden"
        class="visually-hidden"
      >
        {{ lastNotification.text }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Toaster',
  inject: ['notifications', 'dismissNotification'],
  computed: {
    lastNotification() {
      return this.notifications[this.notifications.length - 1] || null
    }
  }
}
</script>

<style lang="scss">
@keyframes slidein {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: none;
    opacity: 1;
  }
}

.slide-enter-active {
  animation: slidein 0.25s ease-out;
}

.slide-leave-active {
  animation: slidein 0.25s ease-out reverse;
}

.toaster {
  position: fixed;
  bottom: $spacing * 2;
  left: $spacing * 2;
  right: $spacing * 2;
  display: flex;
  justify-content: center;
  z-index: 1;
}
</style>
