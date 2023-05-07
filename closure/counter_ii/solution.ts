type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): ReturnObj {
  let value = init;
  return {
    increment: () => ++value,
    reset: () => value = init,
    decrement: () => --value
  };
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/
