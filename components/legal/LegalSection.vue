<template>
  <section class="legal container--small">
    <h1>Mentions légales</h1>

    <p>
      <strong>/</strong> est une <strong>SARL</strong> (Société à Responsabilité
      Limitée) au capital social de <strong>XXX€</strong> domiciliée au XXXX,
      33000 Bordeaux et enregistrée au registre des commerces et des sociétés de
      Bordeaux sous le numéro XXX XXX XXX.
    </p>

    <div class="legal__sub-section">
      <h2>Coordonnées</h2>

      <ul>
        <li>Email : contact@slash-tmp.dev</li>
        <li>Téléphone : XX XX XX XX XX</li>
      </ul>
    </div>

    <div class="legal__sub-section">
      <h2>Hébergement</h2>

      <p>
        Ce site est hébergé par la société <strong>Netlify</strong> domiciliée
        au 2325 3rd Street, Suite 296, San Francisco, California 94107.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LegalSection'
}
</script>

<style lang="scss">
.legal {
  margin: 0 auto;

  &__sub-section {
    margin-top: 3rem;
  }
}
</style>
