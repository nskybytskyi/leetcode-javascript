function* fibGenerator(): Generator<number, any, number> {
    let curr = 0, next = 1;
    while (true) {
        yield curr;
        next += curr;
        curr = next - curr;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */