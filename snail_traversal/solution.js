/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length != rowsCount * colsCount) {
        return [];
    }

    const array = Array(rowsCount).fill().map(() => Array(colsCount).fill());
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
