/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let x=original;
    while(nums.includes(x)){

        x=x*2


    }
    return x
    
};