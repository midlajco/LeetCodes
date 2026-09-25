/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {

    
    let x=prices.sort((a,b)=>a-b)
    let y =x[0]+x[1];
    if(money-y >=0){
        return money-y
    }
    else{
        return money
    }


    
};