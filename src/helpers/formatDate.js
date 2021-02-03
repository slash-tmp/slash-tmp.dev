/**
 * Format an raw date into a human readable format
 * @param {date} rawDate
 * @returns {string} 12 février 2021
 */
export default function formatDate(rawDate) {
  const date = new Date(rawDate)
  const day = date.getDate()
  const month = date.toLocaleString('fr', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
