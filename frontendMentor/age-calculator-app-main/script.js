function calculateAge() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-based
  const currentDay = today.getDate();

  const fields = {
    day: {
      input: document.querySelector(".input-container div:nth-child(1) input"),
      label: document.querySelector(".input-container div:nth-child(1) label"),
      error: document.querySelector(
        ".input-container div:nth-child(1) .error-msg"
      ),
      border: document.querySelector(".input-container div:nth-child(1) input"),
      validate: (val) => val >= 1 && val <= 31,
      errorMsg: "Must be a valid day",
    },
    month: {
      input: document.querySelector(".input-container div:nth-child(2) input"),
      label: document.querySelector(".input-container div:nth-child(2) label"),
      error: document.querySelector(
        ".input-container div:nth-child(2) .error-msg"
      ),
      border: document.querySelector(".input-container div:nth-child(2) input"),
      validate: (val) => val >= 1 && val <= 12,
      errorMsg: "Must be a valid month",
    },
    year: {
      input: document.querySelector(".input-container div:nth-child(3) input"),
      label: document.querySelector(".input-container div:nth-child(3) label"),
      error: document.querySelector(
        ".input-container div:nth-child(2) .error-msg"
      ),
      border: document.querySelector(".input-container div:nth-child(3) input"),
      validate: (val) => val <= currentYear,
      errorMsg: "Must be in the past",
    },
  };

  let notFilled = false;
  let isInvalid = false;
  let inputValues = {};

  // Validate each field dynamically
  for (const key in fields) {
    const field = fields[key];
    const value = Number(field.input.value);
    inputValues[key] = value;

    if (!value) {
      field.error.innerHTML = "This field is required";
      field.label.style.color = "hsl(0, 100%, 67%)";
      field.border.style.borderColor = "hsl(0, 100%, 67%)";
      notFilled = true;
    } else {
      field.error.innerHTML = "";
      field.label.style.color = "hsl(0, 1%, 44%)";
      field.border.style.borderColor = "hsl(0, 0%, 86%)";

      if (!field.validate(value)) {
        field.error.innerHTML = field.errorMsg;
        field.label.style.color = "hsl(0, 100%, 67%)";
        field.border.style.borderColor = "hsl(0, 100%, 67%)";
        isInvalid = true;
      }
    }
  }

  if (notFilled || isInvalid) return;

  // Calculate age
  let { day: dayValue, month: monthValue, year: yearValue } = inputValues;

  let yearDiff = currentYear - yearValue;
  let monthDiff = currentMonth - (monthValue - 1);
  let dayDiff = currentDay - dayValue;

  if (dayDiff < 0) {
    monthDiff--;
    const prevMonth = new Date(currentYear, currentMonth, 0); // last day of previous month
    dayDiff += prevMonth.getDate();
  }

  if (monthDiff < 0) {
    monthDiff += 12;
    yearDiff--;
  }

  // Show result
  document.querySelector(".year-result").innerHTML = yearDiff;
  document.querySelector(".month-result").innerHTML = monthDiff;
  document.querySelector(".day-result").innerHTML = dayDiff;
}

// ============= Not dynamically structured (but still works) =============== //

// function calculateAge() {
//   // Getting the input value for the day, month and year
//   let dayInput = document.querySelector(".day-input");
//   let monthInput = document.querySelector(".month-input");
//   let yearInput = document.querySelector(".year-input");

//   let dayValue = Number(dayInput.value);
//   let monthValue = Number(monthInput.value);
//   let yearValue = Number(yearInput.value);

//   // Error message
//   let dayError = document.querySelector(".day-error-msg");
//   let monthError = document.querySelector(".month-error-msg");
//   let yearError = document.querySelector(".year-error-msg");

//   // Label error
//   let dayLabel = document.querySelector(".day-label");
//   let monthLabel = document.querySelector(".month-label");
//   let yearLabel = document.querySelector(".year-label");

//   // Input border-color error
//   dayBorder = document.querySelector(".input-container div:nth-child(1) input");
//   monthBorder = document.querySelector(
//     ".input-container div:nth-child(2) input"
//   );
//   yearBorder = document.querySelector(
//     ".input-container div:nth-child(3) input"
//   );

//   /* Checking if the input value are correct
//       Day = 1 - 31
//       Month = 1 - 12
//       Year = Must be in the past
//   */

//   let today = new Date();

//   let currentYear = today.getFullYear();
//   let currentMonth = today.getMonth();
//   let currentDay = today.getDate();

//   let notFilled = false;
//   let isInvalid = false;

//   // Checks if the fields are empty
//   if (!dayValue) {
//     dayError.innerHTML = "This field is required";
//     dayLabel.style.color = "hsl(0, 100%, 67%)";
//     dayBorder.style.borderColor = "hsl(0, 100%, 67%)";
//     notFilled = true;
//   } else {
//     dayError.innerHTML = "";
//     dayLabel.style.color = "hsl(0, 1%, 44%)";
//     dayBorder.style.borderColor = "hsl(0, 0%, 86%)";
//   }

//   if (!monthValue) {
//     monthError.innerHTML = "This field is required";
//     monthLabel.style.color = "hsl(0, 100%, 67%)";
//     monthBorder.style.borderColor = "hsl(0, 100%, 67%)";
//     notFilled = true;
//   } else {
//     monthError.innerHTML = "";
//     monthLabel.style.color = "hsl(0, 1%, 44%)";
//     monthBorder.style.borderColor = "hsl(0, 0%, 86%)";
//   }

//   if (!yearValue) {
//     yearError.innerHTML = "This field is required";
//     yearLabel.style.color = "hsl(0, 100%, 67%)";
//     yearBorder.style.borderColor = "hsl(0, 100%, 67%)";
//     notFilled = true;
//   } else {
//     yearError.innerHTML = "";
//     yearLabel.style.color = "hsl(0, 1%, 44%)";
//     yearBorder.style.borderColor = "hsl(0, 0%, 86%)";
//   }

//   // If required fields are missing, don't run validation
//   if (notFilled) {
//     return;
//   }

//   // Checking if the ranges are incorrect if the input field is filled
//   if (dayValue < 1 || dayValue > 31) {
//     dayError.innerHTML = "Must be a valid day";
//     dayLabel.style.color = "hsl(0, 100%, 67%)";
//     dayBorder.style.borderColor = "hsl(0, 100%, 67%)";
//     isInvalid = true;
//   }

//   if (monthValue < 1 || monthValue > 12) {
//     monthError.innerHTML = "Must be a valid month";
//     monthLabel.style.color = "hsl(0, 100%, 67%)";
//     monthBorder.style.borderColor = "hsl(0, 100%, 67%)";
//     isInvalid = true;
//   }

//   if (yearValue > currentYear) {
//     yearError.innerHTML = "Must be in the past";
//     yearLabel.style.color = "hsl(0, 100%, 67%)";
//     yearBorder.style.borderColor = "hsl(0, 100%, 67%)";
//     isInvalid = true;
//   }

//   if (isInvalid) {
//     return;
//   }

//   // Evaluating the age
//   let yearEvaluation, monthEvaluation, dayEvaluation;

//   yearEvaluation = currentYear - yearValue;

//   monthEvaluation = currentMonth - (monthValue - 1);

//   dayEvaluation = currentDay - dayValue;

//   if (dayEvaluation < 0) {
//     monthEvaluation--;
//     const prevMonth = new Date(currentYear, currentMonth, 0);
//     dayEvaluation += prevMonth.getDate();

//     // If month goes below 0 after subtracting a day
//     if (monthEvaluation < 0) {
//       monthEvaluation += 12;
//       yearEvaluation--;
//     }
//   }

//   // Passing the result for the day, month and year
//   let yearResult = (document.querySelector(".year-result").innerHTML =
//     yearEvaluation);
//   let monthResult = (document.querySelector(".month-result").innerHTML =
//     monthEvaluation);
//   let dayResult = (document.querySelector(".day-result").innerHTML =
//     dayEvaluation);
// }
