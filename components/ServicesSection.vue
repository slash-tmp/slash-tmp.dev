<template>
  <SectionLandmark
    :level="2"
    class="container container--medium services-section"
    :title="title"
  >
    <slot />
  </SectionLandmark>
</template>

<script>
export default {
  name: 'ServicesSection',
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

.services-section {
  margin: 0 auto;
}

.illustration {
  height: 20rem;
  width: 22.5rem;

  @media (max-width: 1200px) {
    align-self: center;
    height: unset;
    max-width: 22.5rem;
    width: 100%;
  }
}

.webdev-section {
  display: grid;
  grid-template-columns: 1fr min-content;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    align-items: center;
    color: $color-purple;
    display: flex;
  }

  .illustration {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  p:nth-of-type(2) {
    grid-column: 1 / 3;
  }
}

.audit-section {
  display: grid;
  grid-template-columns: min-content 1fr;
  margin-top: 5rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: $color-purple;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    br {
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }

  .illustration {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
}
</style>
