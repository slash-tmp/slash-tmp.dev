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

      <ul class="site-header__socials">
        <li class="site-header__social-icon">
          <a href="https://twitter.com/slash_tmp_dev">
            <VisuallyHidden>Twitter</VisuallyHidden>
            <TwitterIcon />
          </a>
        </li>
        <li class="site-header__social-icon">
          <a href="https://linkedin.com/company/slash-tmp">
            <VisuallyHidden>LinkedIn</VisuallyHidden>
            <TwitterIcon />
          </a>
        </li>
        <li class="site-header__social-icon">
          <a href="https://github.com/slash-tmp">
            <VisuallyHidden>GitHub</VisuallyHidden>
            <TwitterIcon />
          </a>
        </li>
      </ul>
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
  padding: $spacing * 8.5 $spacing * 2 $spacing * 17;
  color: $color-text-light;

  a,
  a:visited {
    color: inherit;
  }

  &__container {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  &__home-link {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-bold;
    font-size: $font-size-medium * 1.25;
    text-decoration: none;
    margin-right: auto;

    &:hover {
      @include text-gradient;
    }
  }

  &__nav {
    font-family: $font-family-sans-serif;
    font-size: $font-size-medium;
    margin-right: $spacing * 4;
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

  &__socials {
    display: flex;
  }

  &__social-icon {
    height: $spacing * 3;

    & + & {
      margin-left: $spacing * 2;
    }
  }
}
</style>
