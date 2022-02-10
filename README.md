# Mr. Roboger's Neighborhood

#### By Tony Froccaro

####  Mr. Roboger's Neighbordhood utilizing HTML, CSS, Javascript and jQuery

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

Mr. Roboger's Neighborhood is a web application that begins by taking an input, a number, from the user. The application then returns a range of numbers from 0, stopping at the number the user inputted. 

- If a number input by the user contains `1`, all digits are replaced with "Beep!"
- If a number input by the user contains `2`, all digits are replaced with "Boop!"
- If a number input by the user contains a `3`, all digits are replaced with "Won't you be my neighbor?"

## Tests

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "If a number input by the user contains `1`, all digits are replaced with "Beep!""
Code: beepBoop(5);
Expected Output: [0, 'Beep', 2, 3, 4, 5]

Test: "If a number input by the user contains `2`, all digits are replaced with "Boop!""
Code: beepBoop(5);
Expected Output: [0, 'Beep', 'Boop', 3, 4, 5]

Test: "If a number input by the user contains `3`, all digits are replaced with "Won't you be my neighbor?""
Code: beepBoop(5);
Expected Output: [0, 'Beep', 'Boop', 'Won't you be my neighbor?', 4, 5]

Test: "If a number input by the user contains multiple instances of the number `1`, all digits are replaced with "Won't you be my neighbor?""
Code: beepBoop(10);
Expected Output: [0, 'Beep', 'Boop', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep']


## Setup/Installation Requirements

- Download git
- Navigate to your Desktop folder
- Make a folder to store the application files
- Navigate to https://github.com/tonyfroc/mr-roboger
- Select code, then copy the link below "Clone"
- In terminal type:
- `git init`
- `git clone https://github.com/tonyfroc/mr-roboger.git`
- `git remote add your_initials main https://github.com/tonyfroc/mr-roboger.git`
- `git push your_initials main`
- Download a text editor (preferably VSCode) and
- In terminal, type: `code .` and open the `index.html` in a web browser.

## Known Bugs

## License

_[MIT](https://opensource.org/licenses/MIT)_  
Copyright (c) 2022, Tony Froccaro