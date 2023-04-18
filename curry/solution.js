/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
    return function curried(...head) {
        if (head.length >= fn.length) {
            return fn(...head);
        } else {
            return function (...tail) {
                return curried.apply(this, head.concat(tail));
            }
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
