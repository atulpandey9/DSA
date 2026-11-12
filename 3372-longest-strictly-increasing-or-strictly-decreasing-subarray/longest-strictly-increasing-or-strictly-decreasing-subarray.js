/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
  let incresing = 1;
    let decrising = 1;
    let ans = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i-1]) {
            incresing++;
            decrising = 1;
        }
        else if(nums[i] < nums[i-1]) {
            decrising++;
            incresing = 1;
        }
        else {
            incresing = 1;
            decrising = 1;
        }

        ans = Math.max(ans, incresing, decrising);
    }

    return ans;
};