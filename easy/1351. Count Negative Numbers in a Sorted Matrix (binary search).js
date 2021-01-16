/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const getIndex = (arr) => {
        let l = 0, r = arr.length - 1;
        let idx = -1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (arr[mid] < 0) {
                idx = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return idx;
    }

    let count = 0;

    for (let i = 0 ; i < grid.length ; i++) {
        const idx = getIndex(grid[i]);
        if (idx !== -1) count += (grid[i].length - idx);
    }

    return count;
};