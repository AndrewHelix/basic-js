import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('').sort();
  let s2Arr = s2.split('').sort();
  
  let count = 0;
  
  s1Arr.forEach((el) => {
    if (s2Arr.indexOf(el) !== -1) {
      let i = s2Arr.indexOf(el)
      s2Arr.splice(i, 1);
      count ++
    }
  })

  return count
}
