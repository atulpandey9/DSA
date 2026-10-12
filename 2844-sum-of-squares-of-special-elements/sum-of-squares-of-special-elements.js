/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    var len=nums.length;
    var sum=0;
    for(let i=0;i<=len;i++){
        if(len%i===0){
            sum = sum + nums[i - 1] * nums[i - 1];
        }
    }
    return sum;
};