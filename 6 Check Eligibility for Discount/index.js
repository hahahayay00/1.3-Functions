// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function checkDiscountEligibility(purchaseAmount){
    if(purchaseAmount >= 100){
        return "Eligible for discount";
} else {
    return "Not eligible for discount";
}
}
const eligibility = checkDiscountEligibility(120);
console.log(eligibility);