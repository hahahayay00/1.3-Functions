// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function checkLoanEligibility(income,expenses,creditScore){
    const savings = income - expenses;
    if (savings > 1000 && creditScore >=700){
        return "Eligible for loan";
    }else {
        return "Not eligible for loan";
    }
}
const eligibility = checkLoanEligibility(3000, 1800, 720);
console.log(eligibility);