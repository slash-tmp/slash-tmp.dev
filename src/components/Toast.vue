<template>
  <div class="toast">
    <p>
      <slot />
    </p>
    <button
      class="toast__close-button"
      aria-label="Fermer la notification"
      @click="dismiss"
    >
      <CloseIcon />
    </button>
  </div>
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
  position: absolute;
  bottom: 0;
  padding: $spacing * 2 $spacing * 4;
  background-color: $color-text-light;
  box-shadow: 0 0 0.5rem 0.3rem rgba($color-text-dark, 0.15);
  display: flex;
  align-items: center;

  &__close-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
}
</style>
