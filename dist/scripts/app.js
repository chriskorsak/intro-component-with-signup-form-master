// form submission
document.querySelector('#signup-form').addEventListener('submit', e => {
  e.preventDefault();
  let errorMessageCount = 0;
  // remove previous success message if present
  const button = document.querySelector('button');
  button.nextElementSibling.className === 'success' &&
    button.nextElementSibling.remove();
  // get all inputs
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    //remove error outline if present from before
    input.parentElement.classList.remove('error');
    input.classList.remove('error-outline');
    // clear out message if present from before
    input.nextElementSibling && input.nextElementSibling.remove();
    // validate inputs
    const message = validateInput(input);
    if (message) {
      errorMessageCount++;
      // create a new element with the error just below the input
      const errorMessageP = createMessageElement(message, 'p', 'error');
      input.after(errorMessageP);
      // update input for error styling
      input.parentElement.classList.add('error');
      input.classList.add('error-outline');
    }
  });
  // show success message if no error message count
  if (errorMessageCount === 0) {
    const successMessageP = createMessageElement(
      'Success! Please check your email.',
      'p',
      'success'
    );
    button.after(successMessageP);
    // clear out inputs
    inputs.forEach(input => (input.value = ''));
  }
});

// validate input is filled out and run email validation function
function validateInput(input) {
  let message;
  // check for empty input
  if (!input.value) {
    message = `${input.placeholder} can not be empty!`;
    return message;
  }
  // check for valid email
  if (input.placeholder === 'Email Address') {
    if (!emailIsValid(input.value)) message = 'Looks like this is not an email';
    return message;
  }
}

// email validation
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// create message element
function createMessageElement(message, elementType, className) {
  const element = document.createElement(elementType);
  element.textContent = message;
  element.classList.add(className);
  return element;
}
