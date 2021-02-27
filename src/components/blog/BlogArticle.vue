<template>
  <div class="blog-article">
    <Container>
      <Container size="small" alignment="left">
        <NuxtContent :document="article" />
      </Container>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'BlogArticle',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.blog-article {
  padding: $spacing * 10 $spacing * 2;

  @media (max-width: $breakpoint-medium) {
    padding: $spacing * 6 $spacing * 2;
  }

  &__content {
    --outline-color: #{$color-text-dark};
  }
}
</style>
