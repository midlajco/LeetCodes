/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let r =0;
    let l =0;
    let ans =0;

    for (let i =0;i<s.length;i++){
        if(s[i]==="R"){
            r++
        }
        if(s[i]==="L"){
            l++
        }
        if(r===l){
            ans ++;
            r=0;
            l=0
        }
     
    }
       return ans
    
};