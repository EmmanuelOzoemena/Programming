function subscribe(event) {
  event.preventDefault();

  const emailInput = document.querySelector(".email");
  const errorMsg = document.querySelector(".error-msg");
  const emailValue = emailInput.value.trim();

  const container = document.querySelector(".container");
  const successModal = document.querySelector(".success-modal");

  emailInput.classList.remove("email-error");
  errorMsg.textContent = "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is empty
  if (emailValue === "") {
    errorMsg.textContent = "This field is required";
    emailInput.classList.add("email-error");
    return;
  }
  // Check if email is valid with regex
  else if (!emailRegex.test(emailValue)) {
    errorMsg.textContent = "Please enter a valid email address";
    emailInput.classList.add("email-error");
    return;
  }

  // Email is correct – show modal and hide container
  container.style.display = "none";
  successModal.style.display = "block";

  // Update email inside the success message
  const emailSpan = successModal.querySelector("span");
  emailSpan.textContent = emailValue;

  console.log("Submitted email:", emailValue);

  // Refresh the page after 10 seconds
  setTimeout(() => {
    location.reload();
  }, 10000); 
}

function dismissModal() {
  location.reload();
}
