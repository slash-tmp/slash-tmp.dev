<template>
  <component :is="as" class="visually-hidden"><slot /></component>
</template>

<script>
export default {
  name: 'VisuallyHidden',
  props: {
    as: {
      type: String,
      default: 'span'
    }
  }
}
</script>
