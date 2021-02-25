<template>
  <footer class="site-footer">
    <Container class="site-footer__container">
      <h2 class="site-footer__title">Contactez /tmp</h2>
      <p class="site-footer__contact-text">
        Vous souhaitez nous contacter pour — discuter de nos services, dire
        bonjour ou échanger autour du web, n’hésitez pas : soit par email via
        l’adresse
        <a :href="`mailto:${email}`">contact@slash-tmp.dev</a> ou sur les
        réseaux sociaux.
      </p>

      <div class="site-footer__actions">
        <a :href="`mailto:${email}`">Nous écrire un email</a>
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

  &__ruler {
    border-top: 1px solid change-color($color-text-light, $alpha: 0.3);
  }
}
</style>
