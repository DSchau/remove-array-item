import isArray from './is-array';

export default function reduceAndRemove(...items) {
  return function(arr, cur) {
    if ( isArray(cur) ) {
      arr.push(cur
        .reduce(reduceAndRemove(...items), [])
      );
    } else if ( items.indexOf(cur) === -1 ) {
      arr.push(cur);
    }
    return arr;
  };
}
