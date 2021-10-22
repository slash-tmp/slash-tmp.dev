<template>
  <section class="home-audit-form">
    <Container class="home-audit-form__container">
      <h2 class="home-audit-form__title">Votre site est-il accessible ?</h2>
      <p class="home-audit-form__description">
        Un site web accessible, c'est garantir que tous les utilisateurs
        bénéficient d'une <strong>expérience optimale</strong>. Nous vous
        proposons de
        <strong>réaliser gratuitement un audit simplifié</strong> pour avoir un
        premier aperçu du niveau d'accessibilité de votre site.
      </p>
      <form
        action="/.netlify/functions/free-audit"
        method="POST"
        @submit="requestFreeAudit"
        class="home-audit-form__form"
      >
        <div class="home-audit-form__form-group">
          <label for="form-url">URL du site (requis)</label>
          <input
            id="form-url"
            class="home-audit-form__field"
            type="url"
            autocomplete="url"
            required
            name="url"
          />
        </div>

        <div class="home-audit-form__form-group">
          <label for="form-email">Email (requis)</label>
          <input
            id="form-email"
            class="home-audit-form__field"
            type="email"
            autocomplete="email"
            required
            name="email"
          />
        </div>

        <Button class="home-audit-form__submit" size="small" type="submit"
          >Demander un audit gratuit</Button
        >
      </form>
      <p>
        <small>
          Vos données personnelles sont traitées avec respect et votre email est
          uniquement utilisé dans le cadre de cet audit.
        </small>
      </p>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'SubscribeForm',
  inject: ['notify'],
  methods: {
    requestFreeAudit(e) {
      e.preventDefault()

      const formData = new FormData(e.target)
      const urlData = new URLSearchParams(formData).toString()

      fetch('/.netlify/functions/free-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlData
      }).then(res => {
        if (!res.ok) {
          // TODO: display an error message instead of toast.
          this.notify(
            'Une erreur serveur est survenue. Vous pouvez nous contacter par email : contact@slash-tmp.dev.'
          )
        } else {
          this.notify('Votre demande a bien été envoyée.')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.home-audit-form {
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing * 2;
    margin-bottom: $spacing * 2;

    @media (max-width: $breakpoint-medium) {
      grid-template-columns: 1fr;
    }
  }

  &__form-group {
    display: flex;
    flex-direction: column;
  }

  &__field {
    font: inherit;
    border: 1px solid $color-text-dark;
    padding: $spacing;
    border-radius: 0.5rem;
  }

  &__submit {
    justify-self: start;

    @media (max-width: $breakpoint-medium) {
      justify-self: unset;
    }
  }
}
</style>
