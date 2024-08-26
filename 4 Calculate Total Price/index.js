// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

const totalCost = calculateTotalPrice(20, 3);
console.log(`The total cost is $${totalCost}.`);
