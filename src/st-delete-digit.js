import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let res = [];
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1)
    res.push(+newStr)
  }

  res.sort((prev, next) => prev - next)
  return res[res.length - 1]
}
