/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //console.log(prices.sort()) //O(n log n)

    // if (prices.length <= 1) return 0;


    let lowestVal = prices[0];
    let maxProfit = 0; //-Infinity;

    //go down list of values
    //keep track of lowestValue, and maxProfit
    //maxProfit is the greatest instance of currentValue - lowest known value

    //each value, update maxProfit, then update lowestVal
    //return maxProfit at end
    
    for (let value of prices) {
        if (value - lowestVal > maxProfit) {
            maxProfit = value - lowestVal;
        }        
        
        if (value < lowestVal) {
            lowestVal = value
        }
    }

    return maxProfit;


};