<template>
  <p class="toast">
    <slot />
    <button
      class="toast__close-button"
      aria-label="Fermer la notification"
      @click="dismiss"
    >
      <CloseIcon />
    </button>
  </p>
</template>

<script>
export default {
  name: 'Toast',
  methods: {
    dismiss() {
      this.$emit('dismiss')
    }
  }
}
</script>
