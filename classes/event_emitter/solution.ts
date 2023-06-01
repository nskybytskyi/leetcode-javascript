type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void
}

class EventEmitter {
  subscribe(eventName: string, callback: Callback): Subscription {
    // TODO

    return {
      unsubscribe: () => {
        // TODO
      }
    };
  }

  emit(eventName: string, args: any[] = []): any {
    // TODO
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