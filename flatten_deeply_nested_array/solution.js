/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }

    const flattened = [];
    for (const value of arr) {
        if (Array.isArray(value)) {
            flattened.push(...flat(value, n - 1));
        } else {
            flattened.push(value);
        }
    }
    return flattened;
};
