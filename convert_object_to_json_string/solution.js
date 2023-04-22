/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    if (Array.isArray(object)) {
        let items = [];
        for (const value of object) {
            items.push(jsonStringify(value));
        }
        return "[" + items.join(",") + "]";
    } else if (object === Object(object)) {
        let items = [];
        for (const key of Object.keys(object)) {
            items.push('"' + key + '"' + ":" + jsonStringify(object[key]));
        }
        return "{" + items.join(",") + "}";
    } else if (typeof object === "string") {
        return '"' + object + '"';
    } else if (object === null) {
        return "null";
    } else {
        return object;
    }
};
