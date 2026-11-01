/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    
    let min=Infinity;
    let sum=0;

    for(let num of nums){
        min = Math.min(min, num);
        sum+=num;
        
    }
    return sum-(nums.length*min);
};