/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let location = [0, 0];

    for(let i = 0 ; i < moves.length ; i++){
        switch(moves[i]) {
            case 'U':
                location[0]++;
                break;
            case 'D':
                location[0]--;
                break;
            case 'L':
                location[1]--;
                break;
            case 'R':
                location[1]++;
                break;
            default:
                break;
        }
    }

    if(location[0] === 0 && location[1] === 0) return true;
    return false;
};