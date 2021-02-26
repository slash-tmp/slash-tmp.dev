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

      <SocialLinks />
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
    padding: $spacing * 2 $spacing;
  }

  a,
  a:visited {
    color: inherit;
  }

  &__container {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    @media (max-width: $breakpoint-medium) {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  &__home-link {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-bold;
    font-size: $font-size-medium * 1.25;
    text-decoration: none;
    margin-right: auto;

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-medium;
      flex-basis: 100%;
      margin-bottom: $spacing;
    }

    &:hover {
      @include text-gradient;
    }
  }

  &__nav {
    font-family: $font-family-sans-serif;
    font-size: $font-size-medium;
    margin-right: $spacing * 4;

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-normal;
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

    &:hover {
      @include text-gradient;
    }
  }
}
</style>
