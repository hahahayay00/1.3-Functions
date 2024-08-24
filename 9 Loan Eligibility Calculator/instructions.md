### Loan Eligibility Calculator

Have you ever wondered how banks and financial institutions determine if someone qualifies for a loan? Let’s build a simple loan eligibility calculator to see how it’s done! 

In this lesson, you’ll create a function that takes into account a person’s income, expenses, and credit score to determine if they are eligible for a loan. This exercise will help you practice using multiple parameters and conditional logic in functions.

### Additional Notes
Credit scores are a way for lenders (like banks) to assess how likely you are to repay a loan. They range from 300 to 850, with higher scores indicating better creditworthiness. Here's a quick breakdown:

Here's an extremely summarized version:

- **300-579:** Poor - Hard to get loans, very high interest rates.
- **580-669:** Fair - Some loans available, higher interest rates.
- **670-739:** Good - Reliable borrower, decent interest rates.
- **740-799:** Very Good - Dependable, qualifies for low interest rates.
- **800-850:** Excellent - Best loan terms and lowest interest rates.

**Qualification Range:**
To qualify for most standard loans, you generally need a credit score in the "Good" range or above, which means a score of 670 or higher. However, the exact requirement can vary depending on the lender and the type of loan.

## Steps

### 1. Define the Function to Calculate Loan Eligibility

Start by defining a function named `checkLoanEligibility` that takes three parameters: `income`, `expenses`, and `creditScore`.

```javascript
function checkLoanEligibility(income, expenses, creditScore) {
    const savings = income - expenses;
    if (savings > 1000 && creditScore >= 700) {
        return "Eligible for loan";
    } else {
        return "Not eligible for loan";
    }
}
```

### 2. Call the Function and Store the Result

Call the `checkLoanEligibility` function with specific values for income, expenses, and credit score. Store the returned value in a variable named `eligibility`.

```javascript
const eligibility = checkLoanEligibility(3000, 1800, 720);
```

### 3. Display the Eligibility Status

Use `console.log()` to display whether the person is eligible for a loan based on the input values.

```javascript
console.log(eligibility);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function checkLoanEligibility(income, expenses, creditScore) {
    const savings = income - expenses;
    if (savings > 1000 && creditScore >= 700) {
        return "Eligible for loan";
    } else {
        return "Not eligible for loan";
    }
}

const eligibility = checkLoanEligibility(3000, 1800, 720);
console.log(eligibility);
```

</details>

## Explanation

- **Function Parameters:** The `checkLoanEligibility` function takes in three parameters: `income`, `expenses`, and `creditScore`. These are used to assess whether the person qualifies for a loan.

- **Savings Calculation:** Inside the function, the savings are calculated by subtracting `expenses` from `income`. This value represents how much money the person has left after paying their monthly expenses.

- **Conditional Logic:** The function uses an `if-else` statement to check two conditions: if the savings are greater than $1,000 and if the credit score is at least 700. If both conditions are met, the person is eligible for a loan.

- **Returning the Result:** The function returns either "Eligible for loan" or "Not eligible for loan" based on the input values, which is then stored in the `eligibility` variable when the function is called.

## Important Notes

- **Order of Conditions:** The order of conditions in your `if-else` statements can impact performance, especially in more complex applications. In this example, checking the savings first (a simpler calculation) before checking the credit score (which might involve more data processing) can be a good practice.

- **Edge Cases:** Always consider edge cases, such as what happens if the income and expenses are equal (resulting in zero savings) or if the credit score is exactly on the threshold. Testing with a variety of inputs will help ensure your function behaves as expected in all scenarios.