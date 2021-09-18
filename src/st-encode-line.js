import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let resStr = '';
  let count = 0;
  let sym = '';
  for (let i = 0; i < str.length; i++) {
    if (sym === str[i]) {
      count++
    } else if (sym === '') {
      sym = str[i];
      count++
    } else {
      if (count > 1) {
        resStr += count + sym;
      } else {
        resStr += sym;
      }
      sym = str[i];
      count = 1;
    }
  }
  if (count > 1) {
    resStr += count + sym;
  } else {
    resStr += sym;
  }

  return resStr
}
