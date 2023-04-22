/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const hash = JSON.stringify(args);
        if (!(hash in cache)) {
            cache[hash] = fn(...args);
        }
        return cache[hash];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
