/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const dict = {};
    for (const elem of this) {
        const key = fn(elem);
        if (!(key in dict)) {
            dict[key] = [];
        }
        dict[key].push(elem);
    }
    return dict;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
