import reduceAndRemove from './utils/reduce-and-remove';
import flatten from './utils/flatten';

export default function removeTask(arr, ...items) {
  return arr
    .reduce(reduceAndRemove(...items), [])
    .reduce(flatten, []);
}
