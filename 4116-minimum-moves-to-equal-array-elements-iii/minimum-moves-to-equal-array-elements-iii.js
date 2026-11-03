/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const max=Math.max(...nums);
    let moves=0;
    for(let i=0;i<nums.length;i++){
       moves+=(max-nums[i]);
       
    }
    return moves;
  
};