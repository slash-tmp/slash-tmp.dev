<template>
  <div>
    <Hero tag="header">
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        recusandae cum minus voluptatem incidunt dolores nostrum, ipsam maiores
        dolore aut eaque autem sed vel! Odio magni fuga soluta. Odio, ut!
      </p>
    </Hero>

    <div class="container container--small">
      <ul v-for="article in articles" :key="article.slug">
        <li>
          <h2>
            <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
          </h2>
          Écrit le <time>{{ article.createdAt }}</time>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()

    return {
      articles
    }
  }
}
</script>
