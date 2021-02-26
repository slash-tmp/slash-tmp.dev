<template>
  <footer id="contact" class="site-footer">
    <Container class="site-footer__container">
      <h2 class="site-footer__title">Contactez /tmp</h2>
      <p class="site-footer__contact-text">
        Vous souhaitez nous contacter pour — discuter de nos services, dire
        bonjour ou échanger autour du web, n’hésitez pas : soit par email via
        l’adresse
        <strong
          ><a :href="`mailto:${email}`" class="site-footer__email"
            >contact@slash-tmp.dev<span
              class="site-footer__email-underline" /></a
        ></strong>
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

      <div class="site-footer__ruler" />

      <div class="site-footer__informations">
        <p>
          <strong>/tmp</strong> est un petit studio Bordelais<br />
          qui fait du développement et de la qualité web.
        </p>
        <SocialLinks class="site-footer__socials" />
        <p>
          © 2021 -
          <nuxt-link to="/mentions-legales" class="site-footer__legal-link">
            Mentions légales
          </nuxt-link>
        </p>
      </div>
    </Container>

    <div class="site-footer__background-text">À TRÈS BIENTOT ;)</div>
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
  padding: $spacing * 15 0;
  position: relative;
  overflow: hidden;

  & > * + * {
    margin-top: $spacing * 4;
  }

  &__container {
    display: grid;
    gap: $spacing * 5;
  }

  &__title {
    font-size: $font-size-large;
  }

  &__contact-text {
    font-size: 1.8125rem;
    line-height: 1.7;
  }

  /* 
  It seems that chrome/firefox do not handle underlined text with `background-clip: text` well.
  ie. : the underline is either not included in the background clip or does not appear at all.

  This is an "articifical" underline.
  */
  &__email-underline {
    position: absolute;
    bottom: -0.1em;
    left: 0;
    right: 0;
    height: 0.115em;
    background: $gradient-accent;
    pointer-events: none;
  }

  &__email {
    text-decoration: none;
    position: relative;

    @include text-gradient;

    &:hover,
    &:focus {
      .site-footer__email-underline {
        opacity: 0;
      }
    }
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

    &:hover {
      text-decoration: none;
    }

    &:hover #{&}-gradient {
      @include text-gradient;
    }
  }

  &__ruler {
    border-top: 1px solid change-color($color-text-light, $alpha: 0.3);
  }

  &__informations {
    display: grid;
    grid-template-columns: auto auto;
    gap: $spacing * 3;
  }

  &__socials {
    justify-self: end;
    align-self: center;
  }

  &__legal-link:hover {
    text-decoration: none;
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
  }
}
</style>
