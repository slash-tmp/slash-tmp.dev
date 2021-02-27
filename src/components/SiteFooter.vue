<template>
  <footer id="contact" class="site-footer">
    <div class="site-footer__background-text">à très bientôt</div>
    <Container class="site-footer__container">
      <h2 class="site-footer__title">Contactez /tmp</h2>
      <p class="site-footer__contact-text">
        Vous souhaitez nous contacter pour discuter de nos services, dire
        bonjour ou échanger autour du web, n’hésitez pas : par email via
        l’adresse
        <strong
          ><a :href="`mailto:${email}`" class="site-footer__email"
            ><span class="site-footer__email-text"
              >contact@slash-tmp.dev</span
            ></a
          ></strong
        >
        ou sur les réseaux sociaux.
      </p>

      <div class="site-footer__actions">
        <Button as="a" :href="`mailto:${email}`">Nous écrire un email</Button>
        <button class="site-footer__copy-email" @click="copyEmail">
          <span class="site-footer__copy-email-gradient">
            <span aria-hidden="true">→</span>
            Copier notre adresse email
          </span>
          <span aria-hidden="true">💌</span>
        </button>
      </div>

      <hr class="site-footer__ruler" />

      <div class="site-footer__informations">
        <p>
          <strong>/tmp</strong> est un petit studio web<br />
          qui fait du développement et de la qualité.
        </p>
        <SocialLinks class="site-footer__socials" />
        <p>
          © 2021 -
          <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
        </p>
      </div>
    </Container>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  created() {
    this.email = process.env.email
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText(this.email)
    }
  }
}
</script>

<style lang="scss">
.site-footer {
  background: $gradient-background-dark;
  color: $color-text-light;
  padding: $spacing * 15 $spacing * 2;
  position: relative;
  overflow: hidden;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 8 0 $spacing * 2;
  }

  &__container {
    display: grid;
    gap: $spacing * 5;
    padding: 0 $spacing * 2;
    position: relative;
  }

  &__contact-text {
    font-size: 1.8125rem;
    line-height: 1.7;

    @media (max-width: $breakpoint-medium) {
      font-size: $font-size-normal;
    }
  }

  &__actions {
    @media (max-width: $breakpoint-medium) {
      display: grid;
      gap: $spacing;
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }

  &__email {
    text-decoration: none;

    // This is a "fake" underline using background image.
    background-image: $gradient-accent;
    background-size: 100% 0.125rem;
    background-repeat: no-repeat;
    background-position: 0 100%;

    &:hover {
      background-size: 100% 0;
    }
  }

  &__email-text {
    @include text-gradient;
  }

  &__copy-email {
    padding: $spacing * 2;
    border: none;
    font-family: $font-family-serif;
    font-size: $font-size-normal;
    background: none;
    margin-left: $spacing * 2;
    color: $color-text-light;
    text-decoration: underline;
    text-align: left;

    @media (max-width: $breakpoint-medium) {
      margin-left: $spacing * -2;
    }

    &:hover {
      text-decoration: none;
    }

    &:hover #{&}-gradient {
      @include text-gradient;
    }
  }

  &__ruler {
    border: none;
    border-top: 1px solid change-color($color-text-light, $alpha: 0.3);
    width: 100%;
  }

  &__informations {
    display: grid;
    grid-template-columns: auto auto;
    gap: $spacing * 3;

    @media (max-width: $breakpoint-medium) {
      grid-template-columns: 1fr;

      br {
        display: none;
      }
    }
  }

  &__socials {
    justify-self: end;
    align-self: center;

    @media (max-width: $breakpoint-medium) {
      justify-self: initial;
    }
  }

  &__background-text {
    font-family: $font-family-sans-serif;
    font-size: $font-size-normal * 4.7;
    font-weight: $font-weight-bold;
    left: 0;
    right: 0;
    opacity: $opacity-background-text;
    position: absolute;
    text-transform: uppercase;
    bottom: -2rem;
    text-align: center;
    margin: 0;

    @media (max-width: $breakpoint-medium) {
      display: none;
    }
  }
}
</style>
