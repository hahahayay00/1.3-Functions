### Check Eligibility for Discount

Let's explore how to create a function that determines whether a user is eligible for a discount based on their purchase amount. This lesson will help you practice using conditional logic within functions to make decisions.

## Steps

### 1. Define the Function

Start by defining a function named `checkDiscountEligibility` that takes one parameter: `purchaseAmount`.

```javascript
function checkDiscountEligibility(purchaseAmount) {
    if (purchaseAmount >= 100) {
        return "Eligible for discount";
    } else {
        return "Not eligible for discount";
    }
}
```

### 2. Call the Function and Store the Result

Call the `checkDiscountEligibility` function with a specific purchase amount, and store the returned value in a variable named `eligibility`.

```javascript
const eligibility = checkDiscountEligibility(120);
```

### 3. Display the Eligibility Status

Use `console.log()` to display whether the user is eligible for a discount based on their purchase amount.

```javascript
console.log(eligibility);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function checkDiscountEligibility(purchaseAmount) {
    if (purchaseAmount >= 100) {
        return "Eligible for discount";
    } else {
        return "Not eligible for discount";
    }
}

const eligibility = checkDiscountEligibility(120);
console.log(eligibility);
```

</details>

## Explanation

- **Conditional Logic:** The function checks if the `purchaseAmount` is greater than or equal to 100. If it is, the function returns "Eligible for discount"; otherwise, it returns "Not eligible for discount."

- **Returning Values:** The function returns a string based on the condition. This string is then stored in the `eligibility` variable when the function is called.

- **Displaying Results:** The eligibility status is displayed using `console.log()` to inform the user whether they qualify for a discount.

This lesson helps you to integrate using `if-else` statements within functions, allowing your code to make decisions and provide feedback based on user input.