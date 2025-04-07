function submitForm(event) {
  event.preventDefault();

  let firstName = document.querySelector(".first-name");
  let lastName = document.querySelector(".last-name");
  let emailAddress = document.querySelector(".email-address");
  let queryButtons = document.getElementsByName("query");
  let message = document.querySelector(".message");
  let consent = document.querySelector(".check-box");

  let queryBgChecked = document.querySelector(".input-group");

  let firstNameInput = firstName.value;
  let lastNameInput = lastName.value;
  let messageInput = message.value;

  // Error message
  let firstNameError = document.querySelector(
    ".grid-two div:nth-child(1) .error-msg-one"
  );
  let lastNameError = document.querySelector(
    ".grid-two div:nth-child(2) .error-msg-one"
  );
  let emailAddressError = document.querySelector(".grid-one .error-msg-one");

  let queryError = document.querySelector(".error-msg-four");

  let messageError = document.querySelector(".error-msg-two");

  let consentError = document.querySelector(".error-msg-three");

  let isFilled = true;

  if (firstNameInput === "") {
    firstNameError.innerHTML = "This field is required";

    isFilled = false;
  } else {
    firstNameError.innerHTML = "";
  }

  if (lastNameInput === "") {
    lastNameError.innerHTML = "This field is required";

    isFilled = false;
  } else {
    lastNameError.innerHTML = "";
  }

  emailAddress.addEventListener("blur", validateEmaiil());

  function validateEmaiil() {
    let emailAddressInput = emailAddress.value;

    if (emailAddressInput === "") {
      emailAddressError.innerHTML = "This field is required";

      isFilled = false;
    } else if (!emailAddressInput.includes("@")) {
      emailAddressError.innerHTML = "Please enter a valid email address";

      isFilled = false;
    } else {
      emailAddressError.innerHTML = "";
    }
  }

  function validateQueryButtons() {
    let isChecked = false;

    for (let i = 0; i < queryButtons.length; i++) {
      if (queryButtons[i].checked) {
        isChecked = true;
        break;
      }
    }

    if (!isChecked) {
      queryError.innerHTML = "Please select a query type";

      isFilled = false;
    } else {
      queryError.innerHTML = "";
      isFilled = true; // ---
    }
  }

  // Add event listeners to each radio button
  for (let i = 0; i < queryButtons.length; i++) {
    queryButtons[i].addEventListener("click", function () {
      // Reset all parent div background colors
      for (let j = 0; j < queryButtons.length; j++) {
        queryButtons[j].parentNode.style.backgroundColor = "";
      }

      // Change background of the selected radio button's parent div
      this.parentNode.style.backgroundColor = "hsl(148, 38%, 91%)";

      isFilled = true;
      validateQueryButtons();
    });
  }


  if (messageInput === "") {
    messageError.innerHTML = "This field is required";

    isFilled = false;
  } else {
    messageError.innerHTML = "";
  }

  consent.addEventListener("change", validateTerms());

  function validateTerms() {
    if (!consent.checked) {
      consentError.innerHTML =
        "To submit this form, please consent to being contacted";

      isFilled = false;
    } else {
      consentError.innerHTML = "";
    }
  }

  // validateQueryButtons()

  if (isFilled) {
    document.querySelector(".pop-up").style.display = "block";
    // console.log('Pop-up activated')

    setTimeout(function () {
      document.querySelector(".pop-up").style.display = "none";

      document.forms[0].reset(); // refresh the form
    }, 6000); // 6000 milliseconds = 6 seconds
  }
}
