<template>
  <div class="articles container container--small">
    <ul class="articles__list flow">
      <li
        v-for="article in articles"
        :key="article.slug"
        class="articles__item"
      >
        <h2>
          <NuxtLink class="articles__itemLink" :to="article.path">
            {{ article.title }}
          </NuxtLink>
        </h2>
        Écrit le <time>{{ formatDate(article.date) }}</time>
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
