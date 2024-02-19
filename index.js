const inputs = document.querySelectorAll(
  'input[type="text"], input[type="mail"], input[type="number"], input[type="date"]'
);

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = "";
  }
};
const codeChecker = (value) => {
  if (value.length < 5 || value.length > 5) {
    errorDisplay("code", "le code postal n'est pas valide");
  } else {
    errorDisplay("code", "", true);
  }
};
const ageChecker = (value) => {
  if (!value.match(/^[0-9]{1,3}$/)) {
    errorDisplay("age", "le format n'est pas valide");
  } else {
    errorDisplay("age", "", true);
  }
};
const socialChecker = (value) => {
  if (!value.match(/^[1|2]+[0-9]{12}$/)) {
    errorDisplay("social", "le numéro de secu n'est pas valide");
  } else {
    errorDisplay("social", "", true);
  }
};
const mailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "L'email n'est pas valide");
  } else {
    errorDisplay("email", "", true);
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "email":
        mailChecker(e.target.value);
        break;
      case "code":
        codeChecker(e.target.value);
        break;
      case "social":
        socialChecker(e.target.value);
        break;
      case "age":
        ageChecker(e.target.value);
        break;
      default:
        null;
    }
    let deliv = document.getElementById("deliv");
    let validity = document.getElementById("validity");

    if (deliv.value > validity.value) {
      errorDisplay("validity", "Passport expiré");
    } else {
      errorDisplay("validity", "", true);
    }
  });
});
