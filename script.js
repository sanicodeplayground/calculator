"use strict";

// 1. Getting elements
const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

const displayInput = document.querySelector(".display-input");
const displayOutput = document.querySelector(".display-output");
let resultDisplayed = false;

// Breaking down the problem
// Add even listener to button equals
// Add event listener to AC so the input is cleared
// Add event listener to numbers
// Display numbers in displayInput

// 2. Add event listeners to numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (e) {
    let currentString = displayInput.innerHTML;
    console.log(currentString);
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      displayInput.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      displayInput.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      displayInput.innerHTML = "";
      displayInput.innerHTML += e.target.innerHTML;
    }
  });
}

// 3. Add event listeners to operators
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (e) {
    let currentString = displayInput.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷"
    ) {
      let newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      displayInput.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("Enter a number first");
    } else {
      displayInput.innerHTML += e.target.innerHTML;
    }
  });
}

// 4. Add event listener to Equal
equal.addEventListener("click", function () {
  let inputString = displayInput.innerHTML;
  let number = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(number);
  console.log("----------------------");
});
/*

clear.addEventListener("click", function () {
  clear.textContent = 0;
  displayInput.textContent = "";
  displayOutput.textContent = "";
});

plusMinus.addEventListener("clicked", function () {});

dot.addEventListener("click", function () {});



// Update Display
const displayNumbers = function (num) {
  displayInput.textContent += num;
  return num;
};
console.log(displayNumbers());

// Show result function when = is pressed
const solve = function (value) {};

// clearDisplay function
const clearDisplay = function () {};

*/
