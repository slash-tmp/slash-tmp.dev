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
        <li class="site-header__social-item">
          <a
            class="site-header__social-link"
            href="https://twitter.com/slash_tmp_dev"
          >
            <VisuallyHidden>Twitter</VisuallyHidden>
            <TwitterIcon class="site-header__social-icon" />
          </a>
        </li>
        <li class="site-header__social-item">
          <a
            class="site-header__social-link"
            href="https://linkedin.com/company/slash-tmp"
          >
            <VisuallyHidden>LinkedIn</VisuallyHidden>
            <LinkedInIcon class="site-header__social-icon" />
          </a>
        </li>
        <li class="site-header__social-item">
          <a
            class="site-header__social-link"
            href="https://github.com/slash-tmp"
          >
            <VisuallyHidden>GitHub</VisuallyHidden>
            <GitHubIcon class="site-header__social-icon" />
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
  padding: $spacing * 8.5 $spacing * 2;
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

  &__social-item {
    align-items: center;
    display: flex;
    height: $spacing * 3;

    & + & {
      margin-left: $spacing * 2;
    }
  }

  &__social-link {
    display: flex;

    --gradient-stop-1: #{$color-text-light};
    --gradient-stop-2: #{$color-text-light};
    --gradient-stop-3: #{$color-text-light};

    &:hover {
      --gradient-stop-1: #{$color-accent-one};
      --gradient-stop-2: #{$color-accent-two};
      --gradient-stop-3: #{$color-accent-three};
    }
  }

  &__social-icon {
    height: $spacing * 3;
  }
}
</style>
