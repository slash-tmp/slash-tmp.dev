<template>
  <header class="site-header">
    <div class="site-header__content container container--medium">
      <nuxt-link class="site-header__company-name" to="/">/tmp</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
.site-header {
  --outline-color: #{$color-white};
  --header-font-size: 2.5rem;

  background-color: $color-purple;

  &__content {
    @media (max-width: 1200px) {
      margin: 0 auto;
    }
  }

  &__company-name {
    font-size: var(--header-font-size);
    color: $color-white;
    font-family: $font-family-heading;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    --header-font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    --header-font-size: 1.2rem;
  }
}
</style>
