/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let timer = null;
  let args_ = null;

  const handler = () => {
    if (args_ === null) {
      timer = null;
    } else {
      fn(...args_);
      args_ = null;
      timer = setTimeout(handler, t);
    }
  };

  return function (...args) {
    if (timer) {  // looping
      args_ = args;
    } else {  // waiting
      fn(...args);
      timer = setTimeout(handler, t);
    }
  }
};

/**
* const throttled = throttle(console.log, 100);
* throttled("log"); // logged immediately.
* throttled("log"); // logged at t=100ms.
*/
