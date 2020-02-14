import { includes } from 'lodash';
import "../css/style.css";
// import assert from 'power-assert';

const arr = [1, 2, 6, 4];
const includesArr = includes(arr, 2);
assert(includesArr(arr, 2) === 3);
