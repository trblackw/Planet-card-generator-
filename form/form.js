const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const telephoneInput = document.querySelector('#telephone');
const emailInput = document.querySelector('#email');

//FORM VALIDATORS
// Can only contain letters a-z in lowercase
function isValidUsername(username) {
  return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
const isValidPassword = password => {
    return  /[a-z]/.test(password) &&
            /[A-Z]/.test(password) && 
            /[0-9]/.test(password)
}

// The telephone number must be in the format of (555) 555-5555
const isValidTelephone = telephone => /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);

// Must be a valid email address
const isValidEmail = email => /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);


//formats number (xxx) xxx-xxxx
const formatTelephone = text => text.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '($1) $2-$3');


const showOrHideTip = (show, element) => {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

telephoneInput.addEventListener('blur', e => {
    e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));
