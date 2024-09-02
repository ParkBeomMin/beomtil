/**
 * Capitalizes the first letter of the given string.
 * 
 * @param {string} string - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
const capitalize = (string) => {
    try {
        if (typeof string !== 'string') {
            throw new TypeError('Input must be a string');
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    } catch (e) {
        console.error(`capitalize error: ${e.message}`);
        return string;
    }
};

export default capitalize;
