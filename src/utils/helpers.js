/**
 * Capitalizes the first letter of a string.
 * @param {string} string - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Formats a date to a readable string.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
