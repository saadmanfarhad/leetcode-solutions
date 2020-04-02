/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var words = s.split(' ');

    if(words.length) {
        let index = words.length - 1;
        while(index >= 0) {
            if(words[index].length) return words[index].length;
            index -= 1;
        }
    }

    return 0;
};