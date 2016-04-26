import isArray from './is-array';
import flattenDeep from 'lodash.flattendeep';

export default function flattenAndReduce(prev = [], cur) {
  if ( isArray(cur) ) {
    const flattened = flattenDeep(cur);
    if ( flattened.length ) {
      prev.push(cur);
    }
  } else {
    prev.push(cur);
  }
  return prev;
}
