import assert from 'power-assert';
import includesArr from './index';

const arr = [1, 2, 6, 4];
assert(includesArr(arr, 2) === 3);
console.log('all done');
