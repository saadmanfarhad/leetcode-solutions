/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length) {
        let needleIdx = 0;

        for(let i = 0 ; i < haystack.length ; i++) {
            if(haystack[i] === needle[needleIdx]) {
                if(needleIdx === needle.length - 1) {
                    return i - needleIdx;
                }
                needleIdx += 1;
            }
            else {
                if(needleIdx > 0) {
                    i = i - needleIdx;
                    needleIdx = 0;
                }
            }
        }
        return -1;
    }
    return 0;
};