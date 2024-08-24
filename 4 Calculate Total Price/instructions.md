### Calculate Total Price

Let’s jump into a practical task: calculating the total price of items in a shopping cart. This lesson will show you how to write a function that takes the price of an item and the quantity purchased, then calculates and returns the total cost. Ready to see how quickly you can tally up the total?

## Steps

### 1. Define the Function

Start by defining a function named `calculateTotalPrice` that takes two parameters: `price` and `quantity`.

```javascript
function calculateTotalPrice(price, quantity) {
    const total = price * quantity;
    return total;
}
```

### 2. Call the Function and Display the Result

Now that you’ve defined the `calculateTotalPrice` function, call it with the price and quantity as arguments. Store the result in a variable, and then print the total cost using `console.log()`.

```javascript
const totalCost = calculateTotalPrice(20, 3);
console.log(`The total cost is $${totalCost}.`);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function calculateTotalPrice(price, quantity) {
    const total = price * quantity;
    return total;
}

const totalCost = calculateTotalPrice(20, 3);
console.log(`The total cost is $${totalCost}.`);
```

</details>

## Explanation

- **Function Definition:** The `calculateTotalPrice` function takes two parameters: `price` and `quantity`. Inside the function, these values are multiplied to get the total price, which is then returned.

- **Calling the Function:** By passing the price of an item and the quantity to the function, it calculates the total cost and returns the result, which you can then store in a variable.

- **Using Parameters:** Parameters like `price` and `quantity` allow the function to be flexible, working with any item and quantity to calculate the cost.

## Important Notes

- **Real-World Application:** Functions like `calculateTotalPrice` are essential in e-commerce platforms, where calculating totals based on user input is a common task.