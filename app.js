const userDay = document.querySelector("#day");
const userMonth = document.querySelector("#month");
const userYear = document.querySelector("#year");

const labelDay = document.querySelector("#label-day");
const labelMonth = document.querySelector("#label-month");
const labelYear = document.querySelector("#label-year");

const errorDay = document.querySelector("#error-day");
const errorMonth = document.querySelector("#error-month");
const errorYear = document.querySelector("#error-year");

const resultDay = document.querySelector("#result-day");
const resultMonth = document.querySelector("#result-month");
const resultYear = document.querySelector("#result-year");

const errorMessage = document.querySelectorAll(".error-message");

const submitBtn = document.querySelector(".btn-submit");

let birthDay = 0;
let birthMonth = 0;
let birthYear = 0;

userDay.addEventListener("input", () => {
  birthDay = Number(userDay.value);
});

userMonth.addEventListener("input", () => {
  birthMonth = Number(userMonth.value);
});

userYear.addEventListener("input", () => {
  birthYear = Number(userYear.value);
});

function ageCalc() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  let ageDay = currentDay - birthDay;
  let ageMonth = currentMonth - birthMonth;
  let ageYear = currentYear - birthYear;

  //checks if user birth day is less than 0
  if (ageDay < 0) {
    ageMonth--;
    let lastMonthPreviousDays = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    ageDay = lastMonthPreviousDays + ageDay;
  }

  // checks if user birth month is less than 0
  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  // checks if the input fields are empty
  if (userDay.value === "" && userMonth.value === "" && userYear.value === "") {
    displayError(errorDay, "This field is required");
    displayError(errorMonth, "This field is required");
    displayError(errorYear, "This field is required");

    return;
  } else {
    removeError(errorDay);
    removeError(errorMonth);
    removeError(errorYear);
  }

  // check if each individual element are empty
  if (userDay.value === "") {
    displayError(errorDay, "This field is required");
    return;
  } else if (userMonth.value === "") {
    displayError(errorMonth, "This field is required");
    return;
  } else if (userYear.value === "") {
    displayError(errorYear, "This field is required");
    return;
  } else {
    removeError(errorDay);
    removeError(errorMonth);
    removeError(errorYear);
  }

  // check if the day is valid
  if (
    userDay.value < 0 ||
    userDay.value > new Date(birthYear, birthMonth, 0).getDate()
  ) {
    displayError(errorDay, "Must be a valid day");
    return;
  }

  // check if the month is valid
  if (userMonth.value < 0 || userMonth.value > 12) {
    displayError(errorMonth, "Must be a valid month");
    return;
  }

  // check if the year is in the past
  if (userYear.value > currentYear) {
    displayError(errorYear, "Must be in the past");
    return;
  }

  // display the result on the UI
  resultDay.textContent = ageDay;
  resultMonth.textContent = ageMonth;
  resultYear.textContent = ageYear;
}

submitBtn.addEventListener("click", () => {
  ageCalc();
});

// display error function
function displayError(element, message) {
  document.querySelectorAll(".label-text").forEach((label) => {
    label.classList.add("error-label");
  });

  document.querySelectorAll(".user-input").forEach((input) => {
    input.classList.add("error-input");
  });

  element.classList.remove("hidden");
  element.textContent = message;
}

// remove error message function
function removeError(element) {
  document.querySelectorAll(".label-text").forEach((label) => {
    label.classList.remove("error-label");
  });

  document.querySelectorAll(".user-input").forEach((input) => {
    input.classList.remove("error-input");
  });

  element.classList.add("hidden");
}
