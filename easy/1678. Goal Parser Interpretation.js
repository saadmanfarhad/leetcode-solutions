/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let resStr = '';
    for(let i = 0 ; i < command.length ; i++) {
        if(command[i] == 'G') {
            resStr += 'G';
        }
        if(command[i] == '(') {
            if(command[i+1] == ')') {
                resStr += 'o';
                i++;
            } else {
                resStr += 'al';
                i += 2;
            }
        }
    }

    return resStr;
};