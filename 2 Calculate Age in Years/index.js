// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}

const age = calculateAge(1990);
console.log(`Wow! You are ${age} years old this year!`);