import isArray from './is-array';

export default function reduceAndRemove(...args) {
  return function(prev, cur) {
    if ( isArray(cur) ) {
      prev.push(cur
        .reduce(reduceAndRemove(...args), []));
    } else if ( args.indexOf(cur) === -1 ) {
      prev.push(cur);
    }
    return prev;
  };
}
