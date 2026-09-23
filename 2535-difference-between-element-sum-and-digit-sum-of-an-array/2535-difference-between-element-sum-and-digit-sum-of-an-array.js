/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let sumA=nums.reduce( (num,sumA)=> sumA+num);
    let sumB=nums.toString().split(",").join("").split("").map((num)=>Number(num)).reduce((num,sumB)=>sumB+Number(num));
    return sumA-sumB

    
  
    

    
    
};



