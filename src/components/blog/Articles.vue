<template>
  <div class="articles container container--small">
    <ul class="articles__list flow">
      <li
        class="articles__item"
        v-for="article in articles"
        :key="article.slug"
      >
        <h2>
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </h2>
        Écrit le <time>{{ formatDate(article.createdAt) }}</time>
      </li>
    </ul>
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
.articles {
  margin: 0 auto;

  &__list {
    --flow: 4rem;

    @media (max-width: 600px) {
      --flow: 2rem;
    }
  }
}
</style>
