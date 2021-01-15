const callButton = document.querySelector(".header__button-text");
const requestPopup = document.querySelector(".overlay");
const closePopup = document.querySelector(".form-request__close");

function togglePopup() {
  requestPopup.classList.toggle("overlay_visible");
}

callButton.addEventListener("click", togglePopup);
closePopup.addEventListener("click", togglePopup);

//validate

function showError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '! Не правильный формат';
  input.classList.add("form__input_invalid");
}

function hideError(form, input) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.remove("form__input_invalid");
}

function checkInputValidty(form, input) {
  if (input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input);
  }
}

function setButtonState(button, isActive) {
  if (isActive) {
    button.classList.remove("form__submit_invalid");
    button.disabled = false;
  } else {
    button.classList.add("form__submit_invalid");
    button.disabled = true;
  }
}

function setEventListeners(form) {
  const inputList = form.querySelectorAll(".form__input");
  const submitButton = form.querySelector(".form__submit");

  inputList.forEach((input) => {
    input.addEventListener("input", (evt) => {
      checkInputValidty(form, input);
      setButtonState(submitButton, form.checkValidity());
    });
  });
}

function enableValidation() {
  const formList = document.querySelectorAll(".form__info");

  formList.forEach((form) => {
    setEventListeners(form);

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log("done");
    });
  });
}

enableValidation();
