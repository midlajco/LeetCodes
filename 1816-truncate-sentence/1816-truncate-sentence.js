/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {

    
    let x =s.split(" ");
    while(x.length > k){
        x.pop()
    }
    return x.join(" ");
    
};