class EventEmitter {
  subscribe(event, cb) {
    // TODO

    return {
      unsubscribe: () => {
        // TODO
      }
    };
  }

  emit(event, args = []) {
    //TODO
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */