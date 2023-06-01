/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
  if (
    typeof obj1 !== typeof obj2 ||
    Array.isArray(obj1) !== Array.isArray(obj2)
  ) {
    return [obj1, obj2];
  }

  if (
    typeof obj1 === "number" ||
    typeof obj1 === "boolean" ||
    typeof obj1 === "string"
  ) {
    return obj1 !== obj2 ? [obj1, obj2] : {};
  }

  if (Array.isArray(obj1)) {
    let diffs = {};
    for (const index in obj1) {
      if (index < obj2.length) {
        const diff = objDiff(obj1[index], obj2[index]);
        if (diff.length || Object.keys(diff).length) {
          diffs[index] = diff;
        }
      }
    }
    return diffs;
  }

  let diffs = {};
  for (const key in obj1) {
    if (key in obj2) {
      const diff = objDiff(obj1[key], obj2[key]);
      if (diff.length || Object.keys(diff).length) {
        diffs[key] = diff;
      }
    }
  }
  return diffs;
};
