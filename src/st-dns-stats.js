import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let newArr = [];
  let domainsArr = [];
  

  for (let i = 0; i < domains.length; i++) {
    newArr.push(domains[i].split('.').reverse())
    
  }
  
  for (let i = 0; i < newArr.length; i++) {
    let str = '';
    for (let j = 0; j < newArr[i].length; j++) {
      str += '.' + newArr[i][j];
      domainsArr.push(str)
    }
  }

  return domainsArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc
  }, {})
}
