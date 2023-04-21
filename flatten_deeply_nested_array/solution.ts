type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const flattened: MultiDimensionalArray = [];
    const dfs = (object: number | MultiDimensionalArray, depth: number) => {
        if (n < depth) {
            flattened.push(object);
        } else if (Array.isArray(object)) {
            for (const value of object) {
                dfs(value, depth + 1);
            }
        } else {
            flattened.push(object);
        }
    };
    dfs(arr, 0);
    return flattened;
};
