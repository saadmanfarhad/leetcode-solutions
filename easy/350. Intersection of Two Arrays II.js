/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const binSearch = (arr, n) => {
        let l = 0, r = arr.length - 1;

        while (l <= r) {
            const mid = Math.ceil((l + r) / 2);
            if (arr[mid] === n) return mid;
            else if (arr[mid] < n) l = mid + 1;
            else r = mid - 1;
        }

        return -1;
    }

    let sArr = nums1.length > nums2.length ? nums2 : nums1;
    let bArr = nums1.length > nums2.length ? nums1 : nums2;
    const res = [];

    for (let i = 0 ; i < sArr.length ; i++) {
        const idx = binSearch(bArr, sArr[i]);
        if (idx > -1) {
            bArr.splice(idx, 1);
            res.push(sArr[i]);
        }
    }

    return res;
};