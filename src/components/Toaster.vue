<template>
  <div class="toaster" role="alert" aria-live="polite">
    <transition name="slide">
      <Toast
        v-if="lastNotification"
        :key="lastNotification.id"
        @dismiss="dismissNotification"
      >
        {{ lastNotification.text }}
      </Toast>
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

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}

.slide-leave-active {
  animation: slidein 0.25s ease-out reverse;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}

.toaster {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
</style>
