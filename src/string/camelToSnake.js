/**
 * Converts a camelCase string to snake_case.
 * 
 * @param {string} string - The camelCase string to convert.
 * @returns {string} - The converted snake_case string.
 */
const camelToSnake = (string) => {
    try {
        if (typeof string !== 'string') {
            throw new TypeError('Input must be a string');
        }
        return string.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    } catch (e) {
        console.error(`camelToSnake error: ${e.message}`);
        return string;
    }
};

export default camelToSnake;
