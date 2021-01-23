<template>
  <header class="site-header">
    <div class="site-header__company-name">/tmp</div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.site-header {
  background-color: $color-purple;
  padding: 2.5rem 5rem;

  &__company-name {
    font-size: 3rem;
    color: $color-white;
    font-family: $font-family-heading;
    font-weight: bold;
  }
}
</style>
