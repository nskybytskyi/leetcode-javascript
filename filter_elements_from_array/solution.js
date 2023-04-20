/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
    const truthy = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            truthy.push(arr[i]);
        }
    }
    return truthy;
};
