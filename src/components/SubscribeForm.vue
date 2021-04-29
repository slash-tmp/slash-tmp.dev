<template>
  <div class="subscribe-form">
    <Container class="subscribe-form__container">
      <h2 class="subscribe-form__title">Abonnez-vous par email</h2>
      <p class="subscribe-form__description">
        Recevez un email tous les mois avec les articles du blog ainsi que des
        ressources sur l'accessibilité et le développement web.
      </p>
      <form
        action="https://dev.us1.list-manage.com/subscribe/post?u=439796525b034fc56431e6cbf&amp;id=3fc76243b8"
        method="post"
        target="_blank"
        class="subscribe-form__form"
      >
        <div class="subscribe-form__form-group">
          <label for="firstName">Prénom</label>
          <input
            class="subscribe-form__field"
            type="text"
            name="FIRST_NAME"
            id="firstName"
          />
        </div>

        <div
          class="subscribe-form__form-group subscribe-form__form-group--email"
        >
          <label for="email">Email (requis)</label>
          <input
            class="subscribe-form__field"
            type="email"
            name="EMAIL"
            id="email"
            required
          />
        </div>

        <Button size="small" type="submit">S'abonner</Button>
      </form>
      <p>
        <small
          >Vos données personnelles sont traitées avec respect et sont
          uniquement utilisées pour vous envoyer la newsletter de /tmp. Nous
          utilisons <a href="https://mailchimp.com/fr/">MailChimp</a> pour
          collecter ces données.</small
        >
      </p>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'SubscribeForm'
}
</script>

<style lang="scss">
.subscribe-form {
  padding: 0 $spacing;

  &__container {
    @include dark-background;

    color: $color-text-light;
    border-radius: 0.5rem;
    padding: $spacing * 6;

    @media (max-width: $breakpoint-medium) {
      padding: $spacing * 2;
    }
  }

  &__title {
    font-size: $font-size-medium;
    margin-bottom: $spacing * 2;
  }

  &__description {
    margin-bottom: $spacing * 4;
  }

  &__form {
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    gap: $spacing * 2;
    margin-bottom: $spacing * 2;

    @media (max-width: $breakpoint-medium) {
      align-items: stretch;
      flex-direction: column;

      > * {
        flex-basis: 100%;
      }
    }
  }

  &__form-group {
    display: flex;
    flex-direction: column;

    &--email {
      flex-grow: 1;
    }
  }

  &__field {
    font: inherit;
    border: 1px solid $color-text-dark;
    padding: $spacing;
    border-radius: 0.5rem;
  }
}
</style>
