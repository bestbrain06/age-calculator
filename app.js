// getting all the labels
let dayLabel = document.querySelector(".day-label");
let monthLabel = document.querySelector(".month-label");
let yearLabel = document.querySelector(".year-label");

// getting all the errors
let dayError = document.querySelector(".error-day");
let monthError = document.querySelector(".error-month");
let yearError = document.querySelector(".error-year");

// getting all the output
const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");

// getting the current year , month and day

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();

// getting the button element
const btn = document.querySelector(".btn");

// checking for leap year

// adding a click event listener to the button
btn.addEventListener("click", submit);

function submit() {
  for (let x = 0; x < 1; x++) {
    // getting all the input field
    let dayInput = document.getElementById("day");
    let monthInput = document.getElementById("month");
    let yearInput = document.getElementById("year");

    // checking for valid day input
    if (dayInput.value === "") {
      dayError.textContent = "This field is required";
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else if (dayInput.value < 1 || dayInput.value > 31) {
      dayError.textContent = "Must be a valid day";
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else {
      dayError.textContent = "";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    }

    // checking for valid month input
    if (monthInput.value === "") {
      monthError.textContent = "This field is required";
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else if (monthInput.value < 1 || monthInput.value > 12) {
      monthError.textContent = "Must be a valid month";
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else {
      monthError.textContent = "";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    }

    // checking for valid year input
    if (yearInput.value === "") {
      yearError.textContent = "This field is required";
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else if (yearInput.value > currentYear) {
      yearError.textContent = "Must be in the past";
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else if (yearInput.value < 1) {
      yearError.textContent = "Must be a valid year";
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    } else {
      yearError.textContent = "";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      yearInput.style.borderColor = "hsl(0, 0%, 86%)";
    }

    // getting the user input of days, months and years
    let userDay = document.getElementById("day").value;
    let userMonth = document.getElementById("month").value;
    let userYear = document.getElementById("year").value;

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
      monthInput.value == 4 ||
      monthInput.value == 6 ||
      monthInput.value == 9 ||
      monthInput.value == 11
    ) {
      dayInput.value === 31;
      dayError.textContent = "Must be a valid date";
      dayOutput.textContent = "--";
      monthOutput.textContent = "--";
      yearOutput.textContent = "--";
    }

    // checking for months with 28 days

    if (monthInput.value == 2 && dayInput.value == 29) {
      console.log("hello");
      dayError.textContent = "Must be a valid date";
      dayOutput.textContent = "--";
      monthOutput.textContent = "--";
      yearOutput.textContent = "--";
    }

    // checking for leap year
    /*   if (yearInput.value % 4 == 0 && monthInput.value == 2) {
      console.log("hi");
      dayInput.value === 29;
      dayError.textContent = "";
      dayOutput.innerHTML = currentDay - userDay + 30;
      monthOutput.innerHTML = currentMonth - userMonth;
      yearOutput.innerHTML = currentYear - userYear;
    } */

    if (dayInput.value && monthInput.value && yearInput.value) {
      btn.disabled = true;
    }
  }
}
