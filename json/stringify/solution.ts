function jsonStringify(object: any): string {
    if (Array.isArray(object)) {
        let items: string[] = [];
        for (const value of object) {
            items.push(jsonStringify(value));
        }
        return "[" + items.join(",") + "]";
    } else if (object === Object(object)) {
        let items: string[] = [];
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
