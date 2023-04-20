declare global {
    interface Array<T> {
        snail(rowsCount: number, colsCount: number): number[][];
    }
}

Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
    if (this.length != rowsCount * colsCount) {
        return [];
    }

    const array = Array(rowsCount).fill(0).map(() => Array(colsCount).fill(0));
    let row = 0, col = 0, dir = 1;

    for (const elem of this) {
        array[row][col] = elem;

        if (0 <= row + dir && row + dir < rowsCount) {
            row += dir;
        } else {
            col++;
            dir = -dir;
        }
    }

    return array;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
