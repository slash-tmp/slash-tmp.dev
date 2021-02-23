<template>
  <div class="blog-articles">
    <Container>
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="blog-articles__item"
        >
          <h2 class="blog-articles__title">
            <NuxtLink :to="article.path">
              {{ article.title }}
            </NuxtLink>
          </h2>
          Écrit le <time>{{ formatDate(article.date) }}</time>
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import formatDate from '@/helpers/formatDate'

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
    formatDate(date) {
      return formatDate(date)
    }
  }
}
</script>

<style lang="scss">
.blog-articles {
  padding: $spacing * 10 $spacing * 2;

  &__item {
    & + & {
      margin-top: $spacing * 10;
    }
  }

  &__title {
    margin-bottom: $spacing * 2;
  }
}
</style>
