function areDeeplyEqual(o1: any, o2: any): boolean {
    if (typeof o1 !== typeof o2 || Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }
    if (typeof o1 === "boolean" || typeof o1 === "number" || typeof o1 === "string") {
        return o1 === o2;
    }
    for (const key in o1) {
        if (!(key in o2) || !areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }
    for (const key in o2) {
        if (!(key in o1)) {
            return false;
        }
    }
    return true;
};
