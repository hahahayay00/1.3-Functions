### Personalized Greeting

Time to take your greeting skills up a notch! In this lesson, you’ll learn how to create a function that greets users by name. This is a great way to make your programs more interactive and user-friendly. Let’s see how we can make our greetings a bit more personal.

## Steps

### 1. Define the Function

Start by defining a function named `greetUser` that takes one parameter: the user’s name.

```javascript
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
```

### 2. Call the Function with a User's Name

Now that you’ve defined the `greetUser` function, call it by passing in a name as an argument. This will generate a personalized greeting.

```javascript
greetUser("Alex");
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Alex");
```

</details>

## Explanation

- **Function Definition:** The `greetUser` function takes one parameter, `name`. Inside the function, it uses a template literal to insert the name into the greeting message and prints it to the console.

- **Calling the Function:** By passing a name (like "Alex") as an argument when calling `greetUser`, the function generates a personalized greeting for that user.

- **Using Parameters:** The `name` parameter allows the function to greet anyone by their name, making it flexible and reusable. You can call `greetUser` with different names, and it will greet each person individually.

## Important Notes

- **Personalization:** Personalized greetings can make your applications feel more responsive and engaging to users, providing a better overall experience.
  
- **Template Literals:** Reminder that the use of template literals (`${name}`) is a handy way to insert variables directly into strings, making your code cleaner and easier to read.
  
- **Modularity and Reusability:** By using a function to generate greetings, you keep your code modular and reusable. If you ever need to change the greeting format, you only need to update the function, and the change will apply everywhere it’s used.