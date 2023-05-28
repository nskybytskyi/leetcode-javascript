type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) {
        return arr;
    }

    const flattened: MultiDimensionalArray = [];
    for (const value of arr) {
        if (Array.isArray(value)) {
            flattened.push(...flat(value, n - 1));
        } else {
            flattened.push(value);
        }
    }
    return flattened;
};
