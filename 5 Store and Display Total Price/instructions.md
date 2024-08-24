### Store and Display Total Price

Now that you've learned how to calculate the total price, let's take it a step further by storing the result and displaying it. This exercise will reinforce your understanding of functions returning data and how to work with that data afterward.

## Steps

### 1. Define the Function

We'll use the `calculateTotalPrice` function from the previous lesson, which takes two parameters: `price` and `quantity`.

```javascript
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}
```

### 2. Call the Function and Store the Result

Call the `calculateTotalPrice` function with a specific price and quantity. Store the returned value in a variable named `totalCost`.

```javascript
const totalCost = calculateTotalPrice(20, 3);
```

### 3. Display the Stored Result

Finally, use `console.log()` to display the stored total cost.

```javascript
console.log(`The total cost is $${totalCost}.`);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

const totalCost = calculateTotalPrice(20, 3);
console.log(`The total cost is $${totalCost}.`);
```

</details>

## Explanation

- **Function Return Value:** The `calculateTotalPrice` function returns the product of `price` and `quantity`. This value is then stored in the `totalCost` variable.
  
- **Storing Data:** Storing the function’s return value allows you to use this data later in your code, whether for displaying it, performing further calculations, or any other purpose.

- **Displaying Data:** Using `console.log()` to display the stored value helps confirm that your function is working correctly and that the data is being handled as expected.

With this approach, you're not just calculating values on the fly, but also learning how to manage and display those values in a way that’s useful for more complex programs.