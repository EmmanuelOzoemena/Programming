function calculateRepayment(event) {
  event.preventDefault(); // Prevent form from refreshing

  // Getting all the values from the input
  let mortgageAmount = document.querySelector(".js-mortgage-amount").value;
  let mortgageYears = document.querySelector(".js-mortgage-years").value;
  let mortgageInterest = document.querySelector(".js-mortgage-interest").value;

  let mortgageAmountInput = document.querySelector(".mortgage-amount .input");
  let mortgageYearsInput = document.querySelector(
    ".mortgage-details div:nth-child(1) .input"
  );
  let mortgageInterestInput = document.querySelector(
    ".mortgage-details div:nth-child(2) .input"
  );

  let errorMessageOne = document.querySelector(".error-msg-one");
  let errorMessageTwo = document.querySelector(".error-msg-two");
  let errorMessageThree = document.querySelector(".error-msg-three");

  let hasError = false;

  if (mortgageAmount === "") {
    errorMessageOne.innerHTML = "This field is required";
    mortgageAmountInput.classList.add("input-error");
    hasError = true;
  } else {
    errorMessageOne.innerHTML = "";
    mortgageAmountInput.classList.remove("input-error");
  }

  if (mortgageYears === "") {
    errorMessageTwo.innerHTML = "This field is required";
    mortgageYearsInput.classList.add("input-error");
    hasError = true;
  } else {
    errorMessageTwo.innerHTML = "";
    mortgageYearsInput.classList.remove("input-error");
  }

  if (mortgageInterest === "") {
    errorMessageThree.innerHTML = "This field is required";
    mortgageInterestInput.classList.add("input-error");
    hasError = true;
  } else {
    errorMessageThree.innerHTML = "";
    mortgageInterestInput.classList.remove("input-error");
  }

  if (hasError) {
    return;
  }

  let monthlyRate = Number(mortgageInterest) / 100 / 12;
  let totalPayments = Number(mortgageYears) * 12;

  let monthlyRepayment = (
    (Number(mortgageAmount) *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1)
  ).toFixed(2);

  let termRepayment = (monthlyRepayment * totalPayments).toFixed(2);

  let monthlyAmount = (document.querySelector(
    ".monthly-repayment-amount"
  ).innerHTML = `&#xA3;${Number(monthlyRepayment).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
  })}`);

  let termAmount = (document.querySelector(
    ".term-repayment-amount"
  ).innerHTML = `&#xA3;${Number(termRepayment).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
  })}`);
}

// To reset the form

function resetFrom() {
  document.querySelector("form").reset();

  document.querySelectorAll(".input-error").forEach((element) => {
    element.classList.remove("input-error");
  });

  document
    .querySelectorAll(".error-msg-one, .error-msg-two, .error-msg-three")
    .forEach((element) => {
      element.innerHTML = "";
    });
}
