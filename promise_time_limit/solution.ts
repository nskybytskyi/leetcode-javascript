type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
        const promise = fn(...args);

        const timelimit = new Promise((_resolve, reject) => {
            setTimeout(() => { reject("Time Limit Exceeded"); }, t)
        });

        return Promise.race([promise, timelimit]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
