/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let c= Number(x.toString().split("").reverse().join(""))
            if(c==x){
                return true
                 }else { return false}
            
  }
    
