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

<style lang="scss">
.toast {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  margin: 0 1rem;

  $shadow-color: rgba(mix($color-purple, $color-black, $weight: 5%), 0.1);

  font-size: 0.8rem;
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.25rem 0 $shadow-color,
    0 -0.124rem 0.25rem 0 $shadow-color;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  @media (max-width: 400px) {
    padding: 0.5rem 0.5rem;
  }
}
</style>
