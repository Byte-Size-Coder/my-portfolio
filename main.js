function navigate(url) {
  window.open(url, "_blank").focus();
}

var isNavClosed = true;

function toggleNav() {
  var links = document.querySelector(".nav__links");
  console.log(links);
  console.log(isNavClosed);
  if (links) {
    if (isNavClosed) {
      links.classList.remove("close-links");
      links.classList.remove("closed-links");
      links.classList.add("open-links");
      isNavClosed = false;
    } else {
      links.classList.remove("open-links");
      links.classList.add("closed-links");
      links.classList.add("close-links");
      isNavClosed = true;
    }
  }
}
const observer = new IntersectionObserver((enteries) => {
  // Loop over the entries
  enteries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      if (entry.target.id === "about-me-title") {
        entry.target.classList.add("type-animate");
      }

      if (entry.target.classList.contains("card-section__left")) {
        entry.target.querySelector(".card").classList.add("slide-from-left");
        entry.target
          .querySelector(".card-section__images")
          .classList.add("slide-from-right");
      }

      if (entry.target.classList.contains("card-section__right")) {
        entry.target.querySelector(".card").classList.add("slide-from-right");
        entry.target
          .querySelector(".card-section__images")
          .classList.add("slide-from-left");
      }

      if (entry.target.classList.contains("circle-wrap")) {
        entry.target.classList.add("open-skill");
      }
    }
  });
});

observer.observe(document.querySelector("#about-me-title"));

var cardsLeft = document.querySelectorAll(".card-section__left");

cardsLeft.forEach((card) => observer.observe(card));

var cardsRight = document.querySelectorAll(".card-section__right");

cardsRight.forEach((card) => observer.observe(card));

var cicles = document.querySelectorAll(".circle-wrap");
cicles.forEach((circle) => observer.observe(circle));

var skills = [
  "React",
  "Unity",
  "JavaScript/TypeScript",
  "C#",
  "Unreal Engine",
  "HTML/CSS",
  "Node JS",
  "Firebase",
  "C++",
  "Git",
  "Databases",
  "AWS",
  "Angular",
  "NextJS",
  ".NET",
];

var values = [95, 95, 95, 90, 85, 85, 80, 80, 80, 75, 75, 70, 70, 70, 70];

var myChart = new Chart("myChart", {
  type: "horizontalBar",
  data: {
    labels: skills,
    datasets: [
      {
        backgroundColor: "#fe5f55",
        data: values,
        label: "",
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
  },
});

function handleSubmit(event) {
  event.preventDefault();

  var inputEmail = document.getElementById("email");
  var inputName = document.getElementById("name");
  var inputMessage = document.getElementById("message");

  var email = inputEmail.value;
  var name = inputName.value;
  var message = inputMessage.value;

  // validate inputs
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var errorEmail = document.getElementById("error-email");
  var errorName = document.getElementById("error-name");
  var errorMessage = document.getElementById("error-message");

  var hasError = false;

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

  emailjs.send("service_dal3dto", "template_mpjbvmu", { name, email, message });

  inputEmail.value = "";
  inputName.value = "";
  inputMessage.value = "";

  document.getElementById("message-success").className = "contact__success";

  // send logic
}

document
  .getElementById("submit-button")
  .addEventListener("click", handleSubmit);
