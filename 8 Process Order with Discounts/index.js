// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function calculateTotal(price, quantity){
    return price * quantity
}
function applyDiscount(total) {
    if (total >= 100){
   return total *0.9;
    }
    return total;
}
function processOrder(price,quantity){
    const total = calculateTotal(price,quantity);
    const finalTotal = applyDiscount(total);
    return finalTotal;
}
const finalAmount = processOrder(50, 3);
console.log(`The final amount after discount (if any ) is $${finalAmount}.`);
