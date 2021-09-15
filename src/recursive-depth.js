import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth( arr ) {
    function isArr(arr) {
      for (let el of arr) {
        if (Array.isArray(el)) {
          return 1
        }
      }
      return false
    }
    if (!isArr(arr)) {
      return 1;
    }
  
    return 1 + this.calculateDepth(arr.flat()) 
  }
}
