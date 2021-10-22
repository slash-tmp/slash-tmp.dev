<template>
  <section class="home-projects">
    <Container>
      <h2 class="home-projects__title">Projets récents</h2>
      <article
        class="home-projects__item"
        v-for="project in projects"
        :key="project.slug"
      >
        <h3 class="home-projects__item-title">
          <a :href="project.website">
            <img
              class="home-projects__item-logo"
              :src="project.logo"
              :alt="project.clientName"
            />
          </a>
        </h3>
        <div>
          <p class="home-projects__item-description">
            {{ project.description }}
          </p>
          <ul
            class="home-projects__tag-list"
            aria-label="Technologies et compétences utilisées"
          >
            <li
              v-for="tag in project.tags"
              :key="tag"
              class="home-projects__tag"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </article>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'Homeprojects',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.home-projects {
  --outline-color: #{$color-text-dark};

  padding: 0 $spacing * 2;

  &__title {
    margin-bottom: $spacing * 3.5;
  }

  &__item {
    display: grid;
    gap: 0 $spacing * 2;
    grid-template-columns: $spacing * 20 1fr;

    & + & {
      margin-top: $spacing * 6;
    }

    @media (max-width: $breakpoint-medium) {
      grid-template-columns: 1fr;
    }
  }

  &__item-logo {
    width: 100%;
    object-fit: contain;

    @media (max-width: $breakpoint-medium) {
      max-width: $spacing * 20;
    }
  }

  &__item-title {
    grid-column: 1;
    grid-row: 1 / -1;
    margin-top: 0.45rem;
    margin-bottom: $spacing;
  }

  &__item-description {
    grid-column: 2;
    margin-bottom: $spacing;
  }

  &__tag-list {
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    gap: $spacing;
  }

  &__tag {
    border: 1px solid;
    border-radius: $spacing * 0.5;
    font-family: $font-family-sans-serif;
    font-size: $font-size-tiny;
    padding: $spacing * 0.25 $spacing * 0.75;
    text-transform: uppercase;
  }
}
</style>
