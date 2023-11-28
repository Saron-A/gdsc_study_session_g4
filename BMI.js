// A program that accepts mass and height and calculates the BMI

const prompt = require('prompt-sync')(); // to run the code on vs code terminal

let mass = prompt("Enter your mass in kg: "); 
let height = prompt("Enter your height in meters: ");

let bmi;
bmi = mass / (Math.pow(height, 2));

console.log("Your BMI is " + bmi.toFixed(2));// to round to 2 decimal numbers