function curry(fn: Function): Function {
    return function curried(...head: any[]) {
        if (head.length >= fn.length) {
            return fn(...head);
        } else {
            return function (...tail: any[]) {
                return curried(...head, ...tail);
            }
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
