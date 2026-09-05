/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelset=new Set(jewels);
    let count=0;
    for(const stone of stones){
        if(jewelset.has(stone)){
            count++
        }
    }
    return count;
};