/**
 * Capitalize a string
 *
 * @param {string} string String to capitalize
 * @return {string}
 */
export const capitalize = (string: String): String => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
