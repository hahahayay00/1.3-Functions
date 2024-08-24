### Calculate Final Grade

Have you ever wondered how teachers could automate grading using code with just a click of a button? Let’s get started! 

You’ll learn how to use multiple parameters and conditional logic to assign letter grades.

## Steps

### 1. Define the Function

Start by defining a function named `calculateGrade` that takes two parameters: `score` and `totalPossible`.

```javascript
function calculateGrade(score, totalPossible) {
    const percentage = (score / totalPossible) * 100;

    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}
```

### 2. Call the Function and Store the Result

Call the `calculateGrade` function with a specific score and total possible points. Store the returned value in a variable named `finalGrade`.

```javascript
const finalGrade = calculateGrade(85, 100);
```

### 3. Display the Final Grade

Use `console.log()` to display the final grade.

```javascript
console.log(`The final grade is ${finalGrade}.`);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function calculateGrade(score, totalPossible) {
    const percentage = (score / totalPossible) * 100;

    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}

const finalGrade = calculateGrade(85, 100);
console.log(`The final grade is ${finalGrade}.`);
```

</details>

## Explanation

- **Function Parameters:** The `calculateGrade` function takes in two parameters: `score` (the student’s score) and `totalPossible` (the total possible points). This allows the function to work with any scoring system.

- **Percentage Calculation:** Inside the function, the percentage score is calculated by dividing `score` by `totalPossible` and multiplying by 100. This percentage is then used to determine the letter grade.

- **Conditional Logic:** The function uses `if-else` statements to assign a letter grade based on the percentage. The grades range from "A" for scores of 90% or above to "F" for scores below 60%.

- **Returning the Grade:** The function returns the appropriate letter grade, which is then stored in the `finalGrade` variable when the function is called.

## Important Notes

- **Flexibility:** This function can be used with any scoring system, making it versatile for different grading scales.
  
- **Conditional Range:** Ensure the ranges in your `if-else` statements do not overlap and cover all possible percentages.

By creating a function that calculates grades, you’re applying practical coding skills to a scenario that mirrors real-life applications, such as grading systems in schools or training programs. Keep building your skills, and you’ll be able to tackle even more complex challenges!