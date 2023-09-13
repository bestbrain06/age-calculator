// getting all the input field
let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
// getting the form element
const form = document.querySelector("form");
// getting all the output
const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");

// getting the current year , month and day

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();

// adding event listener to the form

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // the isValidDay function
  isValidDay();

  // the isValidMonth function
  isValidMonth();

  // the isValidYear function
  isValidYear();
});

function showError(input, message) {
  // getting the element with the block class
  const block = input.parentElement;

  // getting the element with the error class
  const error = block.querySelector("small");

  // getting the elemet with the label
  const label = block.querySelector("label");

  // changing the text content of the error message
  error.textContent = message;

  // changing the text color of the label
  label.style.color = "hsl(0, 100%, 67%)";

  // changing the border color around the input field
  input.style.borderColor = "hsl(0, 100%, 67%)";
}

// show sucess function
function showSuccess(input, message) {
  // getting the element with the block class
  const block = input.parentElement;

  // getting the element with the error class
  const error = block.querySelector("small");

  // getting the elemet with the label
  const label = block.querySelector("label");

  // changing the border color around the input field
  input.style.borderColor = "hsl(0, 0%, 86%)";

  // changing the text color of the label
  label.style.color = "hsl(0, 1%, 44%)";

  // changing the text content of the error message
  error.textContent = message;
}

// checking for valid day input
function isValidDay() {
  if (dayInput.value === "") {
    showError(dayInput, "This field is required");
  } else if (dayInput.value < 1 || dayInput.value > 31) {
    showError(dayInput, "Must be a valid day");
  } else {
    showSuccess(dayInput, "");
  }
}

// checking for valid month input

function isValidMonth() {
  if (monthInput.value === "") {
    showError(monthInput, "This field is required");
  } else if (monthInput.value < 1 || monthInput.value > 12) {
    showError(monthInput, "Must be a valid month");
  } else {
    showSuccess(monthInput, "");
  }
}

// checking for valid year

function isValidYear() {
  if (yearInput.value === "") {
    showError(yearInput, "This field is Required");
  } else if (yearInput.value > currentYear) {
    showError(yearInput, "Must be in the past");
  } else if (yearInput.value < 1) {
    showError(yearInput, "Must be a valid year");
  } else {
    showSuccess(yearInput, "");
  }
}

// getting the user input of days, months and years
let userDay = document.getElementById("day").value;
let userYear = document.getElementById("year").value;
let userMonth = document.getElementById("month").value;

// calculating the user days
if (dayInput.value && monthInput.value && yearInput) {
  if (currentDay < userDay) {
    dayOutput.innerHTML = currentDay - userDay + 30;
    currentMonth = currentMonth - 1;
  } else {
    dayOutput.innerHTML = currentDay - userDay;
  }
}

// calculatingthe user months
if (monthInput.value && dayInput.value && yearInput.value) {
  if (currentMonth < userMonth) {
    monthOutput.innerHTML = currentMonth - userMonth + 12;
    currentYear = currentYear - 1;
  } else {
    monthOutput.innerHTML = currentMonth - userMonth;
  }
}

// calculating the user years
if (yearInput.value && monthInput.value && dayInput.value) {
  yearOutput.innerHTML = currentYear - userYear;
}

// checking the months with 30 days

if (
  (monthInput.value == 4 ||
    monthInput.value == 6 ||
    monthInput.value == 9 ||
    monthInput.value == 11) &&
  dayInput.value > 30
) {
  dayInput.value == 31;
  dayError.textContent = "Must be a valid date";
  dayOutput.textContent = "--";
  monthOutput.textContent = "--";
  yearOutput.textContent = "--";
}

// checking for months with 28 days

if (monthInput.value == 2 && dayInput.value > 28) {
  console.log("hello");
  dayError.textContent = "Must be a valid date";
  dayOutput.textContent = "--";
  monthOutput.textContent = "--";
  yearOutput.textContent = "--";
}

// checking for leap year
if (yearInput.value % 4 == 0 && monthInput.value == 2) {
  dayInput.value === 29;
  console.log("hi");
  dayError.textContent = "";
  dayOutput.innerHTML = currentDay - userDay + 30;
  monthOutput.innerHTML = currentMonth - userMonth;
  yearOutput.innerHTML = currentYear - userYear;
}
