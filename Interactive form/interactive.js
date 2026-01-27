const form = document.getElementById("form");
const successMsg = document.getElementById("successMsg");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passInput = document.getElementById("password");

function showError(input, message) {
  const field = input.parentElement;
  field.className = "field error";
  field.querySelector("small").innerText = message;
}

function showSuccess(input) {
  input.parentElement.className = "field success";
}

function checkEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkPassword(pass) {
  return pass.length >= 6;
}


[nameInput, emailInput, phoneInput, passInput].forEach(input => {
  input.addEventListener("blur", () => validateInput(input));
});

function validateInput(input) {
  if (input.value.trim() === "") {
    showError(input, "This field is required");
    return false;
  }

  if (input === emailInput && !checkEmail(input.value)) {
    showError(input, "Invalid email format");
    return false;
  }

  if (input === phoneInput && input.value.length < 10) {
    showError(input, "Phone number is too short");
    return false;
  }

  if (input === passInput && !checkPassword(input.value)) {
    showError(input, "Password must be at least 6 characters");
    return false;
  }

  showSuccess(input);
  return true;
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const isValid =
    validateInput(nameInput) &
    validateInput(emailInput) &
    validateInput(phoneInput) &
    validateInput(passInput);

  if (isValid) {
    successMsg.innerText = "Form submitted successfully ✔";
    form.reset();
    document.querySelectorAll(".field").forEach(f => f.className="field");
  }
});
