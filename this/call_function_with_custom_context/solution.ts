declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (context, ...args): any {
  // TODO
}

/**
* function increment() { this.count++; return this.count; }
* increment.callPolyfill({count: 1}); // 2
*/
