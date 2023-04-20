type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
    const worker = async () => {
        if (functions.length) {
            await functions.shift()();
            await worker();
        }
    };

    return Promise.all(Array(n).fill(false).map(() => worker()));
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
