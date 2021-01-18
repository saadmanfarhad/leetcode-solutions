/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const getIndex = (arr) => {
        let l = 0, r = arr.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (arr[mid] === 1) {
                if (arr[mid + 1] === 0) return mid;
                else l = mid + 1;
            } else {
                if(arr[mid - 1] === 1) return mid - 1;
                else r = mid - 1;
            }
        }

        return arr[arr.length - 1] === 1 ? arr.length - 1 : -1;
    }

    const resArr = [];
    for (let i = 0 ; i < mat.length ; i++) {
        const idx = getIndex(mat[i]);
        if (idx >= -1) resArr.push({val: idx + 1, idx: i})
        else resArr.push({val: 0, idx: i});
    }


    resArr.sort((a, b) => {
        return a.val - b.val
    });

    const res = [];
    for (let i = 0 ; i < k ; i++) {
        res.push(resArr[i].idx);
    }

    return res;
};