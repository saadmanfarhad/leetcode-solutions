/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const counter = {};

    for(let i = 0 ; i < words.length ; i++) {
        let code = '';
        for(let j = 0 ; j < words[i].length; j++) {
            code += morseCode[words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        if(!counter[code]) {
            counter[code] = 1;
        } else {
            counter[code]++;
        }
    }
    return Object.keys(counter).length;
};