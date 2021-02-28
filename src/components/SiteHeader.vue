<template>
  <header class="site-header">
    <Container size="large" class="site-header__container">
      <!-- TODO: replace with adjusted SVG logo -->
      <nuxt-link class="site-header__home-link" to="/">/tmp</nuxt-link>

      <nav class="site-header__nav">
        <ul class="site-header__nav-menu">
          <li class="site-header__nav-item">
            <nuxt-link class="site-header__nav-link" to="#contact"
              >Contact</nuxt-link
            >
          </li>
          <li class="site-header__nav-item">
            <nuxt-link class="site-header__nav-link" to="/blog">Blog</nuxt-link>
          </li>
        </ul>
      </nav>

      <SocialLinks class="site-header__socials" />
    </Container>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
.site-header {
  background: $gradient-background-dark;
  padding: $spacing * 8.5 $spacing * 2;
  color: $color-text-light;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 2;
  }

  a,
  a:visited {
    color: inherit;
  }

  &__container {
    display: grid;
    align-items: center;
    justify-items: end;
    gap: $spacing * 4;
    grid-template-columns: auto 1fr auto;
    line-height: 1;

    @media (max-width: $breakpoint-medium) {
      display: inline-grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      justify-items: start;
      gap: $spacing $spacing * 4;
    }
  }

  &__home-link {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-bold;
    font-size: $font-size-medium * 1.25;
    text-decoration: none;
    margin-right: auto;
    padding-bottom: $spacing; // Prevent text to be cropped with background-clip
    transition-property: -webkit-text-fill-color, -moz-text-fill-color;
    transition-duration: $transition-duration;
    transition-timing-function: ease-in-out;

    @include text-gradient(currentColor);

    @media (max-width: $breakpoint-medium) {
      grid-column: 1;
      grid-row: 1;
      font-size: $font-size-medium;
    }

    &:hover {
      @include text-fill-color(transparent);
    }
  }

  &__nav {
    font-family: $font-family-sans-serif;
    font-size: $font-size-medium;

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-normal;
      grid-column: 1;
      grid-row: 2;
    }
  }

  &__nav-menu {
    display: flex;
  }

  &__nav-item {
    & + & {
      margin-left: $spacing * 2;
    }
  }

  &__nav-link {
    text-decoration: none;
    transition-property: -webkit-text-fill-color, -moz-text-fill-color;
    transition-duration: $transition-duration;
    transition-timing-function: ease-in-out;

    @include text-gradient(currentColor);

    &:hover {
      @include text-fill-color(transparent);
    }
  }

  &__socials {
    @media (max-width: $breakpoint-medium) {
      grid-column: 2;
      grid-row: 2;
    }
  }
}
</style>
