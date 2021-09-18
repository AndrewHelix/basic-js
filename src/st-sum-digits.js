import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  if (n >= 0 && n <= 9) {
    return n;
  }

  let newNum = 0;
  const numArr = n.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    newNum += +numArr[i];
  }
  
  return getSumOfDigits(newNum);
}
