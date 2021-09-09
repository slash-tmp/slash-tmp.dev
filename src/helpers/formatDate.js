/**
 * Format a raw date into a human readable format
 * @param {date} rawDate
 * @returns {string} 12 février 2021
 */
export function formatHumanDate(rawDate) {
  const date = new Date(rawDate)
  const day = date.getDate()
  const month = date.toLocaleString('fr', { month: 'long' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

/**
 * Format a raw date for the `datetime` attribute.
 * @param {date} rawDate
 * @returns {string} 2021-02-18
 */
export function formatMachineDate(rawDate) {
  const date = new Date(rawDate)

  return date.toISOString().split('T')[0]
}
