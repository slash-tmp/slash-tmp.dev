<template>
  <footer class="site-footer">
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
        <button>
          <span aria-hidden="true">→</span>
          Copier notre adresse email
          <span aria-hidden="true">💌</span>
        </button>
      </div>

      <div class="site-footer__ruler" />

      <p>
        /tmp est un petit studio Bordelais<br />
        qui fait du développement et de la qualité web.
      </p>
      <p>© 2021 - Mentions légales</p>
      <!-- Add icons -->
    </Container>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  created() {
    this.email = process.env.email
  }
}
</script>

<style lang="scss">
.site-footer {
  background: $gradient-background-dark;
  color: $color-text-light;
  padding: 15 * $spacing 0;

  & > * + * {
    margin-top: 4 * $spacing;
  }

  &__container {
    display: grid;
    gap: 5 * $spacing;
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

  &__ruler {
    border-top: 1px solid change-color($color-text-light, $alpha: 0.3);
  }
}
</style>
