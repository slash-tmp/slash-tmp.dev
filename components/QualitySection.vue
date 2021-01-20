<template>
  <section
    class="manifesto container--medium"
    aria-labelledby="manifesto-section-title"
  >
    <h2 id="manifesto-section-title">{{ title }}</h2>
    <div class="manifesto__paper-wrapper">
      <!-- Background text -->
      <div
        class="manifesto__paper-background background-text"
        aria-hidden="true"
      >
        qua<br />lité<br />web
      </div>

      <!-- Manifest paper -->
      <div class="manifesto__paper">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QualitySection',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/variables';

.manifesto {
  display: grid;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 800px) {
    padding: 0 0.5rem;
  }

  &__paper-wrapper {
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
    position: relative;
  }

  &__paper-background {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateX(-90%) translateY(-50%);

    @media (max-width: 1200px) {
      display: none;
    }
  }

  .nuxt-content {
    background-color: $color-white;
    border-radius: 1rem;
    border: 1px solid #bdbdbd;
    box-shadow: 1rem 1rem 2.5rem rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    display: grid;
    font-size: 1.2rem;
    gap: 1.5rem;
    max-width: 45rem;
    padding: 5rem 2.5rem;
    position: relative;

    @media (max-width: 800px) {
      font-size: 1rem;
      padding: 2rem 0.5rem;
    }
  }

  &__quality-quote * {
    display: inline;
  }

  &__quality-quote-source {
    white-space: nowrap;

    &::before {
      content: '— ';
    }
  }
}
</style>
