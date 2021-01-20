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
