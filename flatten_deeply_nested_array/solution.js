/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const flattened = [];
    const dfs = (object, depth) => {
        if (n < depth) {
            flattened.push(object);
        } else if (Array.isArray(object)) {
            for (const value of object) {
                dfs(value, depth + 1);
            }
        } else {
            flattened.push(object);
        }
    };
    dfs(arr, 0);
    return flattened;
};
