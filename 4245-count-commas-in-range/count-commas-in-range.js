/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n<1000) return 0;
    let count=0;
    for(let nums=1000;nums<=n;nums++){
        count++;
    }
    return count;
};