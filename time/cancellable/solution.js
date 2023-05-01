/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
const cancellable = function (generator) {
    let cancel;
    const cancel_promise = new Promise((_, reject) => {
        cancel = () => reject("Cancelled");
    });
    cancel_promise.catch(() => { });

    const promise = (async () => {
        let next = generator.next();
        while (!next.done) {
            try {
                next = generator.next(await Promise.race([next.value, cancel_promise]));
            } catch (error) {
                next = generator.throw(error);
            }
        }
        return next.value;
    })();

    return [cancel, promise];
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
