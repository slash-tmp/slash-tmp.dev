<template>
  <div class="legal-content">
    <Container>
      <Container size="small" alignment="left">
        <NuxtContent :document="content" />
      </Container>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'LegalContent',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.legal-content {
  padding: $spacing * 10 $spacing * 2;
}
</style>
