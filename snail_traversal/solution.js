/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length != rowsCount * colsCount) {
        return [];
    }

    const array = [];
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
