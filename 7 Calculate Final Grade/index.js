// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function calculateGrade (score, totalPossible) {
    const percentage = (score / totalPossible) * 100

if (percentage >= 90){
    return "A"
} else if (percentage >= 80){
    return "B";
}else if (percentage >=70){
    return "C";
}else if (percentage >=60){
    return "D"
}else {
    return "F"
}
}
const finalGrade = calculateGrade(85,100)
console.log(`The final grade is ${finalGrade}.`);
