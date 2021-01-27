<template>
  <section
    class="contact container container--medium"
    aria-labelledby="contact-section"
  >
    <h2 id="contact-section">Contact</h2>
    <div class="contact__content">
      <p class="contact__description">
        Si vous souhaitez nous contacter pour discuter de nos services, dire
        bonjour ou échanger autour du web, n’hésitez pas : soit par email via
        l’adresse <strong>contact@slash-tmp.dev</strong> ou sur les réseaux
        sociaux.
      </p>
      <ul class="contact__socials flow">
        <li class="contact__social">
          <a class="contact__link" href="https://twitter.com/slash_tmp_dev">
            <TwitterIcon class="contact__icon" />
            Twitter
          </a>
        </li>
        <li class="contact__social">
          <a class="contact__link" href="#">
            <LinkedinIcon class="contact__icon" />
            LinkedIn
          </a>
        </li>
        <li class="contact__social">
          <a class="contact__link" href="https://github.com/slash-tmp">
            <GithubIcon class="contact__icon" />
            GitHub
          </a>
        </li>
      </ul>
    </div>
    <div class="contact__actions">
      <a class="button" href="mailto:contact@slash-tmp.dev">Nous écrire</a>
      <button type="button" class="contact__clipboard" @click="copyEmail">
        Copier l'adresse email
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  inject: ['notify'],
  methods: {
    copyEmail() {
      navigator.clipboard.writeText('contact@slash-tmp.dev')
      this.notify("L'adresse email a été copiée dans le presse-papier.")
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.contact {
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    justify-items: start;
    margin-bottom: 3rem;

    @media (max-width: 600px) {
      gap: 1rem;
      justify-items: start;
      grid-template-columns: 1fr;
      margin-bottom: 1rem;
    }
  }

  &__description {
    max-width: $container-small;
  }

  &__link {
    color: $color-purple;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: none;
    }
  }

  &__icon {
    margin-right: 0.5rem;
  }

  &__actions {
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__clipboard {
    background: none;
    border: none;
    font: inherit;
    display: inline-block;
    margin-left: 1rem;

    @media (max-width: 600px) {
      margin: 1rem 0 0 0;
    }
  }
}
</style>
