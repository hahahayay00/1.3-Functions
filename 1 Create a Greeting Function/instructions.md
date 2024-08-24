### Create a Greeting Function

Let’s kick things off by learning how to create your very first function! In this lesson, you’ll write a simple function that greets the user with a friendly message. 

This will introduce you to the basics of defining and calling functions, as well as some tips on naming them. Ready to make your code say hello? 👋

## Steps

### 1. Define the Function

Start by defining a function named `greet`. This function won’t take any _parameters_ (think of _parameters_ as _ingredients_ in a recipe)—its sole job is to print a greeting message to the console.

```javascript
function greet() {
    console.log("Hello, World!");
}
```

### 2. Call the Function

Now that you’ve defined the `greet` function, you need to call it to see the greeting message. Simply type the function name followed by parentheses:

```javascript
greet();
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function greet() {
    console.log("Hello, World!");
}

greet();
```

</details>

## Explanation

- **Function Definition:** A function in JavaScript is defined using the `function` keyword, followed by the function name (`greet` in this case) and a pair of parentheses. Inside the curly braces `{}`, you write the code that the function will execute—in this case, it’s printing "Hello, World!" to the console.
  
- **Calling the Function:** After defining a function, you need to call it to execute the code inside it. To call the `greet` function, you simply write `greet();`. This tells the program to run the code inside the function.

- **Naming Functions:** It’s important to give your functions descriptive names that indicate what they do. In this case, `greet` is a clear and simple name that describes the function’s purpose—to greet the user.

## Important Notes

- **Modularity:** Functions help you organize your code into reusable blocks, making your code more modular and easier to manage. Instead of writing the same greeting multiple times, you can just call the `greet` function whenever you need it.


By mastering the basics of creating and calling functions, you’re taking the first step toward writing more organized and efficient code. Keep practicing, and soon you’ll be crafting functions for all sorts of tasks!