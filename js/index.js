function valid() {
  const email = document.getElementById('email');
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Email is required.');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Please provide a valid email');
  } else {
    setSuccessFor(email, 'successfully registered');
  }

}
const small = document.querySelector('small');

function setErrorFor(input, message) {
  const formControl = input;
  formControl.className = 'error';
  small.innerText = message;
  small.classList.remove("message-success");
}

function setSuccessFor(input, message) {
  const formControl = input;
  formControl.className = 'success';
  small.innerText = message;
  small.classList.add("message-success");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.getElementById("btn").addEventListener("click", () =>{
  valid()
})

