/**
 * Apply all needed meta tags for a page
 * @param {string} title
 * @param {string} description
 * @param {string} path - Must start with a `/`
 */
export default function setPageMeta(title, description, path) {
  return {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      { hid: 'og:title', name: 'og:title', content: title },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: `${process.env.baseUrl}${path}`
      }
    ]
  }
}
