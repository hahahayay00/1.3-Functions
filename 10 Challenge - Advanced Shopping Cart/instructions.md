### Challenge - Single Item Discount

Imagine you're working on a simple online store where customers purchase one item at a time. Your task is to create a program that calculates the final price of a single cart item after applying a discount based on the customer’s membership type. 

This challenge will test your ability to use functions and conditional logic to handle different membership levels.

## Scenario

You’ll be writing a program that:

1. **Takes the price** of a single item.
2. **Applies a discount** based on the customer’s membership level:
   - **Regular**: 5% discount
   - **Gold**: 10% discount
   - **Platinum**: 20% discount
3. **Displays the final price** after the discount is applied.

### Example Inputs and Outputs:

```javascript
// == Example 1 ==
// Example usage
// processCart(100, 150, 50, "Gold", "SAVE10");
// Output:
// Total before discount: $300
// Total after membership discount: $270
// Final Total after promo code: $260

// == Example 2 ==
// Example usage
// processCart(200, 50, 100, "Platinum", "SAVE10");
// Output:
// Total before discount: $350
// Total after membership discount: $280
// Final Total after promo code: $270
```

## Hints

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Start by creating a function that calculates the discount based on the membership type.
</details>

<br>

<details>
<summary>Hint 2</summary>
Use `if-else` statements to determine the discount percentage for each membership level.
</details>

<br>

<details>
<summary>Hint 3</summary>
Remember to subtract the discount from the original price to get the final price.
</details>

### Problem-Cracking Quote

"Great things are done by a series of small things brought together." — Vincent Van Gogh

## Pseudocode Solution

<details>
<summary>Pseudocode</summary>

```
1. Create a function to apply the discount:
    - If membership is "Regular", apply a 5% discount.
    - If membership is "Gold", apply a 10% discount.
    - If membership is "Platinum", apply a 20% discount.

2. Subtract the discount from the original price to get the final price.

3. Display the final price after the discount is applied.
```

</details>

This simplified challenge is a great way to practice working with functions and conditional logic. Take your time to carefully consider how each membership level affects the price and ensure your solution handles each case correctly. Happy coding!