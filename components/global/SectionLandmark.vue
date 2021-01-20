<template>
  <section :aria-labelledby="sectionId">
    <component :is="titleTag" :id="sectionId">
      <template v-if="title">
        {{ title }}
      </template>

      <template v-else>
        <slot name="title" />
      </template>
    </component>

    <slot />
  </section>
</template>

<script>
export default {
  name: 'SectionLandmark',
  props: {
    level: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    slug: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    titleTag() {
      return `h${this.level}`
    },
    sectionId() {
      return (
        this.slug ||
        this.title
          .toLowerCase()
          .replace(/[^a-z0-9-_\s]/g, '')
          .replace(/ /g, '-')
      )
    },
  },
}
</script>
