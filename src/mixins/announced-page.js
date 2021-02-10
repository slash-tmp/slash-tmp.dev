/**
 * Include this mixin in a page component to announce it to SR when navigated to.
 * The component should have a `title` property (data or computed).
 */
const AnnouncedPageMixin = {
  inject: ['notify'],
  mounted() {
    this.notify(`Page actuelle : ${this.title}`, true)
  }
}

export default AnnouncedPageMixin
