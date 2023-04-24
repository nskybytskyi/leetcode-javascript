class TimeLimitedCache {
    constructor() {
        this.dict = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const contains = key in this.dict && Date.now() <= this.dict[key][1];
        this.dict[key] = [value, Date.now() + duration];
        return contains;
    }

    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        if (key in this.dict && Date.now() <= this.dict[key][1]) {
            return this.dict[key][0];
        } else {
            return -1;
        }
    }

    /**
     * @return {number} count of non-expired keys
     */
    count() {
        let size = 0;
        for (const key in this.dict) {
            if (Date.now() <= this.dict[key][1]) {
                size++;
            } else {
                delete this.dict[key];
            }
        }
        return size;
    }
}


/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
