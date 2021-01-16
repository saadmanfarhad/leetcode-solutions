/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let count = 0;
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) count++;
      else break;
    }
  }

  return count;
};
