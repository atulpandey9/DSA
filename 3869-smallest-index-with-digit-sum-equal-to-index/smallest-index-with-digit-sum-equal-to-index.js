/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
         let sum = [...String(nums[i])].map(Number).reduce((a, b) => a + b, 0);

        if (i === sum){
            return i;
        }

    }
    return -1;
};