<template>
  <div class="avatar">
    <img class="avatar__image" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.avatar {
  border-radius: 50%;
  background-color: $color-white;
  width: 10rem;
  height: 10rem;
  padding: 0.5rem;
  display: inline-block;

  &__image {
    clip-path: circle(50%);
    width: 100%;
  }
}
</style>
