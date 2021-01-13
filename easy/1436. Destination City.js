/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const outRoads = {};

    for(let i = 0 ; i < paths.length ; i++) {
        if(!outRoads[paths[i][0]]) {
            outRoads[paths[i][0]] = 1;
        } else {
            outRoads[paths[i][0]]++;
        }
        if(!outRoads[paths[i][1]]) outRoads[paths[i][1]] = 0;
        else {
            outRoads[paths[i][1]]++
        }
    }

    console.log(outRoads);
    for(roads in outRoads) {
        if(outRoads[roads] === 0) return roads;
    }

    return;
};