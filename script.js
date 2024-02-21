"use strict";

// Getting elements
const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const backspace = document.querySelector(".backspace");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

const displayInput = document.querySelector(".display-input");
const displayOutput = document.querySelector(".display-output");

// Breaking down the problem
// Add even listener to button equals
// Add event listener to AC so the input is cleared
// Add event listener to numbers
// Display numbers in displayInput

// numbers.addEventlistener("click", function () {});

// Display Numbers
const displayNumbers = function (num) {
  displayInput.value += num;
  return num;
};
console.log(displayNumbers());

// Show result function when = is pressed
const solve = function (value) {};

// clearDisplay function
const clearDisplay = function () {};

//
