// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function discount(price, membership){
    const regular = price * 0.95;
    const gold = price * 0.90;
    const platinum = price * 0.80;
    if(membership == 'regular'){
        return (`The final price after discount is $${regular}`) 
} if(membership == 'gold'){
    return (`The final price after discount is $${gold}`)   
 }
if(membership == 'platinum'){
    return (`The final price after discount is $${platinum}`)   
 }
}
const finalAmount = discount(5000, 'gold')
console.log(finalAmount)