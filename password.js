const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Wecome to the password validator tool!")

// Prompt the user for a password to validate. 

reader.question("Please enter your password for validation.", function(input) {
    if (input.length >= 10) {
        console.log("Validation successful!")
    }   else {
        console.log("Validation failure.")
    }
} ) 