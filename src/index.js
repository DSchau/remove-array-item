import reduceAndRemove from './utils/reduce-and-remove';
import defaults from './defaults';

class RemoveTask {
  constructor(arr, ...items) {
    this.defaults = defaults;
    return arr
      .reduce(reduceAndRemove(...items), []);
  }
}

export default function(...args) {
  return new RemoveTask(...args);
}
