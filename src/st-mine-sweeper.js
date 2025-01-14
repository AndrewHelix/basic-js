import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result = [];

  function isMine(matrix, i, j) {
    if (
      matrix[i] == undefined ||
      matrix[i][j] == undefined ||
      !matrix[i][j]
    ) {
      return 0
    }
    return 1
  }

  for (let i = 0; i < matrix.length; i++) {
    let elOfResult = [];
    let bombs = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      bombs = 
        isMine(matrix, i - 1, j - 1) + 
        isMine(matrix, i - 1, j) +
        isMine(matrix, i - 1, j + 1) +
        isMine(matrix, i, j - 1) +
        isMine(matrix, i, j + 1) +
        isMine(matrix, i + 1, j - 1) + 
        isMine(matrix, i + 1, j) + 
        isMine(matrix, i + 1, j + 1);
      elOfResult.push(bombs);
    }
    result.push(elOfResult);
  }

  return result;
}
