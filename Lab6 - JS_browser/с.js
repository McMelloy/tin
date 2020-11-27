var form = document.getElementById("form");
var numerical = document.getElementById("numerical");
var email = document.getElementById("email");

function ShowError(element, message) {
  const formControl = element.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function ShowSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}

function checkEmptiness(elements) {
  elements.forEach(function (elem) {
    if (elem.value.trim() === "") {
      ShowError(elem, "must be filled");
      return false;
    } else {
      ShowSuccess(elem);
    }
  });
  return true;
}

function checkEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!re.test(email.value)) {
    ShowError(email, "Incorrect email");
    return false;
  }
  return true;
}

function checkNumerical(numerical) {
  if (isNaN(numerical.value)) {
    ShowError(numerical, "Incorrect numerical");
    return false;
  }
  return true;
}

function submitForm() {
  return (checkEmptiness([numerical, email]) & checkNumerical(numerical) & checkEmail(email));
}
