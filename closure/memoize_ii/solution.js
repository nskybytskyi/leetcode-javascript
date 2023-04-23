/**
 * @param {Function} fn
 */
function memoize(fn) {
    const terminal = Symbol();
    const trie_cache = new Map();

    return function (...args) {
        let cache = trie_cache;
        for (const arg of args) {
            if (!cache.has(arg)) {
                cache.set(arg, new Map());
            }
            cache = cache.get(arg);
        }
        if (!cache.has(terminal)) {
            cache.set(terminal, fn(...args));
        }
        return cache.get(terminal);
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
