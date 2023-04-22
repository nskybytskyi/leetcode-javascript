class TimeLimitedCache {
    dict: { [key: number]: [number, number] };

    constructor() {
        this.dict = {};
    }

    set(key: number, value: number, duration: number): boolean {
        const contains = key in this.dict && Date.now() <= this.dict[key][1];
        this.dict[key] = [value, Date.now() + duration];
        return contains;
    }

    get(key: number): number {
        if (key in this.dict && Date.now() <= this.dict[key][1]) {
            return this.dict[key][0];
        } else {
            return -1;
        }
    }

    count(): number {
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
