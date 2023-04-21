function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const truthy: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            truthy.push(arr[i]);
        }
    }
    return truthy;
};
