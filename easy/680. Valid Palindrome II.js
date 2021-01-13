/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let lIdx = 0;
    let rIdx = s.length - 1;
    let mismatch = 0;
    let lPal = true;
    let rPal = true;

    while(lIdx <= rIdx) {
        if(s[lIdx] !== s[rIdx]) {
            mismatch++;
            rIdx--;
        }
        if(s[lIdx] === s[rIdx]) {
            lIdx++;
            rIdx--;
        }
        if(mismatch > 1) {
            lPal = false;
        };
    }

    lIdx = 0;
    rIdx = s.length - 1;
    mismatch = 0;

    while(lIdx <= rIdx) {
        if(s[lIdx] !== s[rIdx]) {
            mismatch++;
            lIdx++;
        }
        if(s[lIdx] === s[rIdx]) {
            lIdx++;
            rIdx--;
        }
        if(mismatch > 1) {
            rPal = false;
        };
    }

    return lPal || rPal;
};