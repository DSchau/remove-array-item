# remove-array-item

[![Build Status](https://img.shields.io/npm/v/remove-array-item.svg)](https://www.npmjs.com/package/remove-array-item)
[![Build Status](https://travis-ci.org/DSchau/remove-array-item.svg?branch=master)](https://travis-ci.org/DSchau/remove-array-item)
[![David](https://img.shields.io/david/DSchau/remove-array-item.svg)](https://david-dm.org/DSchau/remove-array-item)

A simple utility to (recursively) remove specified item(s) from an array.

## Install

```shell
npm i remove-array-item --save
```

## Usage

### `removeArrayItem(arr, item)`

The module simply exports a function; the first argument is the current array, the next is the item that should be removed from all arrays/nested arrays.

It uses a "naive" `indexOf` implementation, and so does not do any deep equality checks on objects or the like.

### Examples

```javascript
import removeArrayItem from 'remove-array-item';

const arr = removeArrayItem(['red', 'green', ['red', 'blue']], 'red');

// arr will be ['green', ['blue']]
``` 

Aditionally, note that additional arguments can be passed (in sequence), and so multiple items can be removed in one statement, a la the following example:

```javascript
const arr = removeArrayItem(['red', 'green', ['blue']], 'red', 'green');

// arr will be [['blue']]
```
