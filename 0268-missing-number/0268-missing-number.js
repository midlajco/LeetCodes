/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let x =nums.sort((a,b)=>b-a);
    for(let i=0;i<=x.length;i++){
        if(! x.includes(i)){
          return i
        }
    }
    
};