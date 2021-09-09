<template>
  <section class="blog-article-hero">
    <Container>
      <h1 class="blog-article-hero__title">{{ title }}</h1>
      <div class="blog-article-hero__date">
        Écrit le
        <time :datetime="machineDate">{{ humanDate }}</time> —
        <NuxtLink :to="{ name: 'blog' }">
          Retour à la liste des articles
        </NuxtLink>
      </div>
      <p class="blog-article-hero__description">{{ description }}</p>
    </Container>
  </section>
</template>

<script>
import { formatHumanDate, formatMachineDate } from '@/helpers/formatDate'
export default {
  name: 'BlogArticleHero',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    humanDate() {
      return formatHumanDate(this.date)
    },
    machineDate() {
      return formatMachineDate(this.date)
    }
  }
}
</script>

<style lang="scss">
.blog-article-hero {
  @include dark-background;

  color: $color-text-light;
  padding: $spacing * 8 $spacing * 2 $spacing * 15;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 8 $spacing * 2 $spacing * 10;
  }

  &__title {
    margin-bottom: $spacing * 2;
  }

  &__date {
    margin-bottom: $spacing * 4;
  }
}
</style>
