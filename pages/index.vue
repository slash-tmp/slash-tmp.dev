<template>
  <div>
    <QualitySection :title="manifestoContent.title">
      <nuxt-content :document="manifestoContent" />
    </QualitySection>

    <ServicesSection :title="servicesContent.title">
      <nuxt-content :document="servicesContent" />
    </ServicesSection>

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
              <svg
                class="contact__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                ></path>
              </svg>
              Twitter
            </a>
          </li>
          <li class="contact__social">
            <a class="contact__link" href="#">
              <svg
                class="contact__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </li>
          <li class="contact__social">
            <a class="contact__link" href="https://github.com/slash-tmp">
              <svg
                class="contact__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path></svg
              >GitHub
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
  </div>
</template>

<script>
export default {
  name: 'Index',
  inject: ['notify'],
  async asyncData({ $content }) {
    const fetchManifesto = $content('home/manifesto').fetch()
    const fetchServices = $content('home/services').fetch()

    return {
      manifestoContent: await fetchManifesto,
      servicesContent: await fetchServices,
    }
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText('contact@slash-tmp.dev')
      this.notify("L'adresse email a été copiée dans le presse-papier.")
    },
  },
}
</script>
