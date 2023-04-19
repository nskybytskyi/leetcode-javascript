declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn: (item: any) => string) {
    const dict = {};
    for (const elem of this) {
        const key = fn(elem);
        if (!(key in dict)) {
            dict[key] = [];
        }
        dict[key].push(elem);
    }
    return dict;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
