function valid() {
  const email = document.getElementById('email');
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Email is required.');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Please provide a valid email');
  } else {
    setSuccessFor(email);
  }

}

function setErrorFor(input, message) {
  const formControl = input;
  const small = document.querySelector('small');
  formControl.className = 'error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input;
  formControl.className = 'success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.getElementById("btn").addEventListener("click", () =>{
  valid()
})

