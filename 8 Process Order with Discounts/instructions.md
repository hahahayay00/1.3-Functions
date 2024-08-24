### Process Order with Discounts

Have you ever wondered how online stores calculate the total price of your order and apply discounts automatically? Let’s find out how it’s done! 

In this lesson, you’ll learn how to create a function that processes an order by calculating the total price and applying a discount if applicable. You’ll also see how functions can work together to make your code more organized and efficient.

## Steps

### 1. Define the Function to Calculate Total Price

Start by defining a function named `calculateTotal` that takes two parameters: `price` and `quantity`. This function will calculate the total price.

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

### 2. Define a Separate Function to Apply a Discount

Next, define a separate function named `applyDiscount` that takes the total price as a parameter. This function will apply a 10% discount if the total price is greater than or equal to $100.

```javascript
function applyDiscount(total) {
    if (total >= 100) {
        return total * 0.9; // Apply a 10% discount
    }
    return total;
}
```

### 3. Create the Main Function to Process the Order

Now, define the main function named `processOrder` that calls both `calculateTotal` and `applyDiscount`. This function will take `price` and `quantity` as parameters, calculate the total price, apply the discount if applicable, and return the final amount.

```javascript
function processOrder(price, quantity) {
    const total = calculateTotal(price, quantity);
    const finalTotal = applyDiscount(total);
    return finalTotal;
}
```

### 4. Call the Function and Display the Result

Call the `processOrder` function with specific values for price and quantity, and store the result in a variable named `finalAmount`. Use `console.log()` to display the final amount after applying the discount.

```javascript
const finalAmount = processOrder(50, 3);
console.log(`The final amount after discount (if any) is $${finalAmount}.`);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

function applyDiscount(total) {
    if (total >= 100) {
        return total * 0.9; // Apply a 10% discount
    }
    return total;
}

function processOrder(price, quantity) {
    const total = calculateTotal(price, quantity);
    const finalTotal = applyDiscount(total);
    return finalTotal;
}

const finalAmount = processOrder(50, 3);
console.log(`The final amount after discount (if any) is $${finalAmount}.`);
```

</details>

## Explanation

- **Separate Functions:** The logic for calculating the total price and applying the discount is split into two distinct functions: `calculateTotal` and `applyDiscount`. This approach keeps each function focused on a single task, making the code more modular and easier to maintain.

- **Main Function:** The `processOrder` function acts as the main orchestrator, calling both `calculateTotal` and `applyDiscount` to process the order and calculate the final amount.

- **Function Collaboration:** By having functions work together, you can build more complex and reusable code that can be easily adapted for different scenarios.

## Important Notes

- **Modular Functions for Collaboration:** 
    - When functions are modular, it’s easier for multiple programmers to work on a project simultaneously. For example, one developer can focus on the `calculateTotal` function while another works on `applyDiscount`.

    - This separation allows each person to work independently without interfering with the other’s code, making collaboration more efficient.

- **Function Naming Conventions:** 
    - Naming your functions clearly and descriptively is crucial. The names `calculateTotal` and `applyDiscount` immediately tell you what each function does. 

    - Good naming conventions make your code more readable and easier to maintain, especially in larger projects where multiple developers are involved.

- **Breaking Down Functions:** 
    - A general rule of thumb is to keep functions focused on a single task. If a function starts doing multiple things or becomes too long, consider breaking it down into smaller functions. 

    - For instance, separating the discount logic into its own `applyDiscount` function makes the `processOrder` function cleaner and more focused on the overall task. This also makes debugging easier, as you can isolate problems to specific functions.