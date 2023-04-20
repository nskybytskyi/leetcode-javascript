declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (this.length != rowsCount * colsCount) {
        return [];
    }

    const array: number[][] = [];
    for (let row = 0; row < rowsCount; row++) {
        array.push([]);

        let position = row;
        for (let col = 0; col < colsCount; col++) {
            console.log(row, col, position);
            array[row].push(this[position]);

            if (col % 2) {
                position += 2 * row + 1;
            } else {
                position += 2 * (rowsCount - row) - 1;
            }
        }
    }

    return array;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
