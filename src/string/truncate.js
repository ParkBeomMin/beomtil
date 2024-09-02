/**
 * Truncates the given string to the specified length and appends an ellipsis.
 * 
 * @param {string} string - The string to be truncated.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string} - The truncated string with an ellipsis.
 */
const truncate = (string, length) => {
    try {
        if (typeof string !== 'string' || typeof length !== 'number') {
            throw new TypeError('Invalid input: expected a string and a number');
        }
        return string.length > length ? string.slice(0, length) + '...' : string;
    } catch (e) {
        console.error(`truncate error: ${e.message}`);
        return string;
    }
};

export default truncate;
