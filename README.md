## Instructions for form challenge
1. Create a form within the FormComponent
2. Add 2 inputs to the form
   * Numerical input with label "How much I like programming"
   * Textual input with label "Ways in which I like programming"
3. Make the "Ways in which I like programming" input required
4. Create a button in your form
   * Make this button disabled when the form is not valid
   * Make this button submit the form when clicked
5. Create a new Angular Service in the same folder as your FormComponent
   * Create a new method here that will log the following phrase to the console "Button has been clicked"
   * Make sure your new method is called when the form button is clicked
6. Create a new method on your new Angular Service that will log the following phrase to the console "Numerical input has been changed"
   * Make sure your new method is called when the "How much I like programming" is changed by the user
7. Make the "Forms" component look like the form in "mock up valid.png"/"mock up invalid.png" in the "src/assests" folder. 
   * ![mockup1](https://github.com/tjwoods58DL/Angular-Challenge/blob/master/src/assets/mock%20up%20valid.png)
   * ![mockup2](https://github.com/tjwoods58DL/Angular-Challenge/blob/master/src/assets/mock%20up%20invalid.png)
   * You don't have to worry about exact size of the elements on the page.
   * If you can't make it look exactly like the mock up get as close as you can.
   * Notice that we do have Angular Material installed and "Ways in which I like programming" only turns red when the input has been touched first.

## Instructions for debug challenge

1. Make sure we can navigate to the "Debug" tab
2. Make sure the console log in the init function shows in your browsers' console
3. Make sure the "test empty" console log isn't logged until the of('test') observable has completed
4. Uncomment the code in the interval() function and fix any errors.
5. Call the timesUp() function every 5th time the string "time is an illusion" is logged to the console
6. Only let the string "time's up" get logged 3 times
7. Add any best practices/coding conventions that you see missing in the DebugComponent

## Running the app

If you have problems running the project, try these package versions
- Angular CLI: 9.1.12
- node -v v12.0.0
- npm -v 6.9.0
