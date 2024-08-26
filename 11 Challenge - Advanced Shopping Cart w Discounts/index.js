// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function discount(price1, price2, price3, membership){
    const total = price1 + price2 + price3
    const regular = total * 0.95;
    const gold = total* 0.90;
    const platinum = total * 0.80; 
    if(membership == 'regular'){
        return (`The final price after discount is $${regular}`) 
} if(membership == 'gold'){
    return (`The final price after discount is $${gold}`)   
 }
if(membership == 'platinum'){
    return (`The final price after discount is $${platinum}`)   
 }
}
const finalAmount = discount(10, 20, 30, 'platinum')
console.log(finalAmount)