/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length) {
        let idx = haystack.indexOf(needle);
        return idx;
    }
    return 0;
};