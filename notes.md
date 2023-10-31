
```javascript
else if (!userEmail.match(/^\S+@\S+\.\S+$/)) {
    errorMessage.forEach((message) => {
        if (message.getAttribute('data-input-id') === 'userEmail') {
            message.innerHTML = "Invalid Email Address";
        }
    });
}
```

1. `else if`: This is part of a conditional statement. It's used to specify an alternative condition to check if the preceding `if` condition is not met. In this case, it's used to check the validity of the email address if it's not empty.

2. `userEmail.match(/^\S+@\S+\.\S+$/)`:

   - `userEmail`: This is the email address you want to validate.
   - `.match()`: This method is used to test if the string matches a regular expression pattern.
   - `/^\S+@\S+\.\S+$/`: This is a regular expression pattern that checks if the email address follows a basic format.

      - `^`: Denotes the start of the string.
      - `\S+`: Matches one or more non-whitespace characters. It matches the local part of the email address before the '@' symbol.
      - `@`: Matches the '@' symbol.
      - `\S+`: Matches one or more non-whitespace characters. It matches the domain part of the email address before the period ('.').
      - `\.`: Matches the period ('.') that separates the domain name from the top-level domain (TLD).
      - `\S+`: Matches one or more non-whitespace characters. It matches the TLD part of the email address.
      - `$`: Denotes the end of the string.

   The `userEmail.match()` method checks if the `userEmail` matches this regular expression pattern. If it does, it returns a truthy value (indicating a valid email address), and if it doesn't, it returns a falsy value (indicating an invalid email address).

3. `errorMessage.forEach((message) => { ... }`: This code iterates through all elements with the class "errorMessage." It's used to find the error message associated with the email input field.

4. `if (message.getAttribute('data-input-id') === 'userEmail') { ... }`: Within the loop, this condition checks if the current error message is associated with the email input field. It does so by comparing the `data-input-id` attribute of the error message to the string "userEmail."

5. `message.innerHTML = "Invalid Email Address";`: If the error message is associated with the email input field, and the email address is not valid according to the regular expression, this line sets the error message's content to "Invalid Email Address."

In summary, this code block checks if the `userEmail` matches the regular expression for a basic email format. If the email is not in a valid format, it sets the error message associated with the email input field to "Invalid Email Address."