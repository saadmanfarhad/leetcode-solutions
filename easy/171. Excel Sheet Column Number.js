/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    if(s.length === 1) return s.charCodeAt(0) - 64;
    else {
        let column = null;
        for (let i = 0 ; i < s.length ; i++) {
            if(i !== s.length - 1 && i > 0) {
                column = column + s.charCodeAt(i) - 64;
                column *= 26;
            }
            else if (i === 0) {
                column += (s.charCodeAt(i) - 64) * 26;
            }
            else {
                column += (s.charCodeAt(i) - 64);
            }
        }
        return column;
    }
};