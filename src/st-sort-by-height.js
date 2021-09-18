import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let keyOne = [];
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i])
    }
  }

  newArr.sort((prev, next) => prev - next);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      keyOne.push(i);
    }
  }

  for (let i = 0; i < keyOne.length; i++) {
    newArr.splice(keyOne[i], 0, -1)
  }

  return newArr;
}
