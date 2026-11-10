/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
   let result =  [...nums1.slice(0,m),...nums2].sort((a,b)=>a-b)
    nums1.splice(0,nums1.length,...result)
   

};
