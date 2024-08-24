### Challenge - Promotional Discount Code


You've already built a simple store that calculates discounts for a single item based on membership. Now, let's upgrade it! This time, you'll calculate the total price for three items, apply the membership discount, and add an extra promo code discount if available. 

This challenge will take your shopping cart to the next level by combining multiple conditions and discounts.

## Scenario

You’ll be writing a program that:

1. **Takes the prices** of three items (previously was one only).
2. **Applies a membership discount** based on the customer’s membership level:
   - **Regular**: 5% discount
   - **Gold**: 10% discount
   - **Platinum**: 20% discount
3. **Applies a promotional discount** if the customer enters a valid promo code:
   - **Promo Code:** `"SAVE10"` gives an additional $10 off the total.
4. **Displays the final price** after applying all discounts.

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
// processCart(80, 120, 60, "Platinum", "SAVE10")
// Output: Total before discount: $260, Total after membership discount: $208, Final Total after promo code: $198

```

## Hints

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Start by calculating the total price of the three items.
</details>

<br>

<details>
<summary>Hint 2</summary>
Apply the membership discount first, then handle the promo code discount separately.
</details>

<br>

<details>
<summary>Hint 3</summary>
Make sure to check if the promo code is valid before applying the discount.
</details>

### Problem-Cracking Quote

"The way to get started is to quit talking and begin doing." — Walt Disney

## Pseudocode Solution

<details>
<summary>Pseudocode</summary>

```
1. Create a function to calculate the total price of three items.
    - Add the three prices together.

2. Create a function to apply the membership discount:
    - If membership is "Regular", apply a 5% discount.
    - If membership is "Gold", apply a 10% discount.
    - If membership is "Platinum", apply a 20% discount.

3. Create a function to apply the promo code discount:
    - If the promo code is "SAVE10", subtract $10 from the total.
    - If the promo code is anything else, no discount is applied.

4. Combine the above functions in a main function to process the order and calculate the final total.

5. Display the total before the discount, after the membership discount, and the final total after applying the promo code.
```

</details>

This upgraded challenge builds on your previous work by adding new layers of complexity. Take your time to carefully consider how each step affects the final outcome and ensure your solution handles all scenarios correctly. Good luck!