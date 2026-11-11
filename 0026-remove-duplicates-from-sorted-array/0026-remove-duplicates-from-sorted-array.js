/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let x =  [...new Set(nums)]
   for (let i = 0; i < x.length; i++) {
        nums[i] = x[i];
    }
    return x.length
    
};