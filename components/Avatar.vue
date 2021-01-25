<template>
  <RatioBox :ratio="1">
    <div class="avatar">
      <img class="avatar__image" :src="src" :alt="alt" />
    </div>
  </RatioBox>
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
  padding: 0.5rem;
  display: inline-block;
  width: 100%;
  height: 100%;

  &__image {
    clip-path: circle(50%);
    width: 100%;
  }
}
</style>
