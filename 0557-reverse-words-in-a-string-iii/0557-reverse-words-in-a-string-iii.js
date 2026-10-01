/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
   let x =  s.split(" ");
  let y =x.map((word)=>word.split("").reverse().join(""))
  return y.join(" ")
};