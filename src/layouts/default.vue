<template>
  <div class="default-layout" tabindex="-1">
    <header class="default-layout__header">
      <Container size="large" class="default-layout__header-container">
        <!-- TODO: replace with adjusted SVG logo -->
        <nuxt-link class="default-layout__home-link" to="/">/tmp</nuxt-link>

        <nav class="default-layout__nav">
          <ul class="default-layout__nav-menu">
            <li class="default-layout__nav-item">
              <nuxt-link class="default-layout__nav-link" to="#contact"
                >Contact</nuxt-link
              >
            </li>
            <li class="default-layout__nav-item">
              <nuxt-link class="default-layout__nav-link" to="/blog"
                >Blog</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <ul class="default-layout__socials">
          <li class="default-layout__social-icon">
            <a href="https://twitter.com/slash_tmp_dev">
              <VisuallyHidden>Twitter</VisuallyHidden>
              <TwitterIcon />
            </a>
          </li>
          <li class="default-layout__social-icon">
            <a href="https://linkedin.com/company/slash-tmp">
              <VisuallyHidden>LinkedIn</VisuallyHidden>
              <TwitterIcon />
            </a>
          </li>
          <li class="default-layout__social-icon">
            <a href="https://github.com/slash-tmp">
              <VisuallyHidden>GitHub</VisuallyHidden>
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </Container>
    </header>
    <!-- <a class="skip-link" href="#main-content">Aller au contenu principal</a> -->
    <!-- <main id="main-content"> -->
    <Nuxt />
    <!-- </main> -->
  </div>
</template>

<script>
import ToastProviderMixin from '@/mixins/toast-provider'

export default {
  name: 'DefaultLayout',
  mixins: [ToastProviderMixin],
  watch: {
    // reset page focus on route change
    $route(to, from) {
      if (from.path !== to.path) {
        // only reset focus on page change (not when going to an anchor on the same page)
        this.$el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
:root {
  font-family: $font-family-serif;
}

.default-layout {
  &__header {
    background: $gradient-background-dark;
    padding: $spacing * 8.5;
    color: $color-text-light;

    a,
    a:visited {
      color: inherit;
    }
  }

  &__header-container {
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
