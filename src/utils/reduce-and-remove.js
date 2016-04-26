import isArray from './is-array';
import flatten from './flatten';

export default function reduceAndRemove(...items) {
  return function(arr, cur) {
    if ( isArray(cur) ) {
      arr.push(cur
        .reduce(reduceAndRemove(...items), [])
        .reduce(flatten, []));
    } else if ( items.indexOf(cur) === -1 ) {
      arr.push(cur);
    }
    return arr;
  };
}
