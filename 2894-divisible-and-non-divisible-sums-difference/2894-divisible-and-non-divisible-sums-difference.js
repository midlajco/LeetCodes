/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let as =0;
    let bs=0;
    for(let i =1 ;i<=n;i++){
        if(i%m !== 0){
            as=as+i
        }
        else{
            bs=bs+i
        }

    }
    return as-bs
};