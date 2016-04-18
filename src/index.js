import reduceAndRemove from './utils/reduce-and-remove';

export default function removeTask(arr, ...items) {
  return arr
    .reduce(reduceAndRemove(...items), []);
}
