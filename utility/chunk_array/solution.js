/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let chunked = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size == 0) {
      chunked.push([]);
    }
    chunked[chunked.length - 1].push(arr[i]);
  }
  return chunked;
};
