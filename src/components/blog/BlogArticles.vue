<template>
  <div class="blog-articles">
    <Container>
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="blog-articles__item"
        >
          <article>
            <h2 class="blog-articles__title">
              <NuxtLink :to="article.path">
                {{ article.title }}
              </NuxtLink>
            </h2>
            <div class="blog-articles__date">
              Écrit le
              <time :datetime="formatMachineDate(article.date)">{{
                formatHumanDate(article.date)
              }}</time>
            </div>
            <p>{{ article.description }}</p>
          </article>
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import { formatHumanDate, formatMachineDate } from '@/helpers/formatDate'

export default {
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    formatHumanDate(date) {
      return formatHumanDate(date)
    },
    formatMachineDate(date) {
      return formatMachineDate(date)
    }
  }
}
</script>

<style lang="scss">
.blog-articles {
  --outline-color: #{$color-text-dark};

  padding: $spacing * 10 $spacing * 2;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 6 $spacing * 2;
  }

  &__item {
    & + & {
      margin-top: $spacing * 10;

      @media (max-width: $breakpoint-medium) {
        margin-top: $spacing * 6;
      }
    }
  }

  &__title {
    margin-bottom: $spacing * 2;
  }

  &__date {
    margin-bottom: $spacing * 4;
  }
}
</style>
