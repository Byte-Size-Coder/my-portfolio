function navigate(url) {
  window.open(url, "_blank").focus();
}

const nav = document.getElementById("main-nav");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

window.addEventListener("scroll", () => {
  if (!nav) return;

  if (window.scrollY > 8) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function handleSubmit(event) {
  event.preventDefault();

  console.log("SENDING")

  const inputEmail = document.getElementById("email");
  const inputName = document.getElementById("name");
  const inputMessage = document.getElementById("message");

  const email = inputEmail.value;
  const name = inputName.value;
  const message = inputMessage.value;

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const errorEmail = document.getElementById("error-email");
  const errorName = document.getElementById("error-name");
  const errorMessage = document.getElementById("error-message");

  let hasError = false;

  if (email.trim() === "") {
    if (errorEmail) {
      errorEmail.innerHTML = "email is required";
      errorEmail.className = "error";
      inputEmail.className = "controlError";
    }
    hasError = true;
  } else if (!email.match(mailformat)) {
    if (errorEmail) {
      errorEmail.innerHTML = "must be valid email";
      errorEmail.className = "error";
      inputEmail.className = "controlError";
    }
    hasError = true;
  } else {
    if (errorEmail) {
      errorEmail.innerHTML = "";
      errorEmail.className = "error-hidden";
      inputEmail.className = "";
    }
  }

  if (name.trim() === "") {
    if (errorName) {
      errorName.innerHTML = "name is required";
      errorName.className = "error";
      inputName.className = "controlError";
    }
    hasError = true;
  } else {
    if (errorName) {
      errorName.innerHTML = "";
      errorName.className = "error-hidden";
      inputName.className = "";
    }
  }

  if (message.trim() === "") {
    if (errorMessage) {
      errorMessage.innerHTML = "message is required";
      errorMessage.className = "error";
      inputMessage.className = "controlError";
    }
    hasError = true;
  } else {
    if (errorMessage) {
      errorMessage.innerHTML = "";
      errorMessage.className = "error-hidden";
      inputMessage.className = "";
    }
  }

  if (hasError) return;

  console.log("SENDING")

  emailjs.send("service_cr1ixgv", "template_mpjbvmu", {
    name,
    email,
    message,
  });

  console.log("SENT")

  inputEmail.value = "";
  inputName.value = "";
  inputMessage.value = "";

  document.getElementById("message-success").className = "contact__success";
}

const submitButton = document.getElementById("submit-button");
if (submitButton) {
  submitButton.addEventListener("click", handleSubmit);
}
