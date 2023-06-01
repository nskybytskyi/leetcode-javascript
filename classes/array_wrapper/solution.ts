class ArrayWrapper {
  nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf() {
    let val = 0;
    for (const num of this.nums) {
      val += num;
    }
    return val;
  }

  toString() {
    return "[" + this.nums.join(',') + "]";
  }
};

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/
