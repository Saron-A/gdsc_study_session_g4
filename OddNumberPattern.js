//A program that defines a function to accept a number and prints a number pattern consisting of odd numbers from 0 up to the given number.

const prompt = require('prompt-sync')();// to accept input from terminal

let number = prompt("Enter a number: ");

while(number <= 0){
console.log("Invalid input! Enter a positive number");
number = prompt("Enter a number: ");
}

oddNumberPattern(number);

function oddNumberPattern(number) {
    for(let i = 0; i <= number; i++){
if(i % 2 !== 0)
console.log(i);
else
continue;
    }
}