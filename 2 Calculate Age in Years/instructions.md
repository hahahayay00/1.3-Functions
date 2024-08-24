### Calculate Age in Years

Let’s dive into a practical coding exercise where you’ll learn how to create a function that calculates a person’s age based on their birth year. 

This lesson will introduce you to how functions can take in data, process it, and return a meaningful result. 🎉

## Steps

### 1. Define the Function

Start by defining a function named `calculateAge`. This function will take one parameter: the birth year of the person.

```javascript
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}
```

### 2. Call the Function and Display the Result

Now that you’ve defined the `calculateAge` function, call it by passing in a birth year and store the result in a variable. Then, use `console.log()` to display the age.

```javascript
const age = calculateAge(1990);
console.log(`Wow! You are ${age} years old this year!`);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}

const age = calculateAge(1990);
console.log(`Wow! You are ${age} years old this year!`);
```

</details>

## Explanation

- **Function Definition:** The `calculateAge` function takes one parameter, `birthYear`. Inside the function, we use `new Date().getFullYear()` to get the current year and subtract the birth year from it to calculate the age. The function then returns the calculated age.
  
- **Calling the Function:** To calculate someone’s age, call the `calculateAge` function with the birth year as an argument. The returned value is stored in the `age` variable, which is then printed to the console.

- **Using Parameters:** Parameters like `birthYear` allow you to pass different values to the function, making it versatile. You can calculate the age of anyone by simply passing their birth year to the function.

## Important Notes

- **Real-World Application:** This kind of function could be used in forms or apps where users input their birth date, and the app calculates their age for things like eligibility checks.
  
- **Date Handling:** The `new Date().getFullYear()` method is a simple way to get the current year. It's part of JavaScript’s built-in `Date` object, which is useful for handling dates and times.
  
- **Modularity:** Functions like `calculateAge` make your code modular and reusable. You can use this function wherever you need to calculate age without rewriting the logic.

- **DRY Principle:** This lesson introduces the DRY (Don’t Repeat Yourself) principle. By using functions, you avoid repeating the same code, which makes your programs more efficient and easier to maintain.
