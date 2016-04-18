import reduceAndRemove from './utils/reduce-and-remove';

export default function removeTask(arr, ...args) {
  return arr
    .reduce(reduceAndRemove(...args), []);
}
