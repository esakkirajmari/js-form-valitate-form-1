let form = document.querySelector("form");
let Name = document.querySelector("#name");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword");

// Event listener to submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});

// What to do with inputs
function handleInput() {
  // Values from dom elements ( input )
  let userNameValue = userName.value.trim();
  let NameValue = Name.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();
  
//  Checking for name
if (NameValue === "") {
  setErrorFor(Name, "Username cannot be blank");
} else {
  setSuccessFor(Name);
}

  //  Checking for username
  if (userNameValue === "") {
    setErrorFor(userName, "Username cannot be blank");
  } else {
    setSuccessFor(userName);
  }

  

  // Checking for password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6 || passwordValue.length > 30) {
    setErrorFor(password, "Password length should be between 6 and 30");
  } else {
    setSuccessFor(password);
  }

  // Checking for confirm password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password not matched with password");
  } else {
    setSuccessFor(confirmPassword);
  }
  
  


}

// If there is some error, than what we want to do with input ?
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let span = formControl.querySelector("span");
  span.innerText = message;
}

// If there is no error, than what we want to do with input ?
function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getInfo(){
  let userNameValue = userName.value.trim();
  let passwordValue = password.value.trim();

  var username1=localStorage.getItem('username');
  var password1=localStorage.getItem('password');

  if(userNameValue==username1 && passwordValue==password1){
    window.location.href="file:///C:/fabevy/dom-website-/index.html";
  }
  console.log(username1);
  console.log(password1);
}


