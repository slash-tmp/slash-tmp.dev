<template>
  <ul class="social-links">
    <li class="social-links__social-item">
      <a
        class="social-links__social-link"
        href="https://twitter.com/slash_tmp_dev"
      >
        <VisuallyHidden>Twitter</VisuallyHidden>
        <TwitterIcon class="social-links__social-icon" />
      </a>
    </li>
    <li class="social-links__social-item">
      <a
        class="social-links__social-link"
        href="https://linkedin.com/company/slash-tmp"
      >
        <VisuallyHidden>LinkedIn</VisuallyHidden>
        <LinkedInIcon class="social-links__social-icon" />
      </a>
    </li>
    <li class="social-links__social-item">
      <a class="social-links__social-link" href="https://github.com/slash-tmp">
        <VisuallyHidden>GitHub</VisuallyHidden>
        <GitHubIcon class="social-links__social-icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.social-links {
  display: flex;

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

    --gradient-stop-1: #{$color-accent-one};
    --gradient-stop-2: #{$color-accent-two};
    --gradient-stop-3: #{$color-accent-three};
    --icon-gradient-opacity: 0;

    &:hover {
      --icon-gradient-opacity: 1;
    }
  }

  &__social-icon {
    height: $spacing * 3;

    @media (max-width: $breakpoint-medium) {
      height: $spacing * 2;
    }
  }
}
</style>
