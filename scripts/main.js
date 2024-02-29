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
        }
    });
});

observer.observe(document.querySelector("#about-me-title"));

var sprints = [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5",
    "Day 6",
    "Day 7",
    "Day 8",
    "Day 9",
    "Day 10",
];

var scrumChart = new Chart("scrumChart", {
    type: "line",
    data: {
        labels: sprints,
        datasets: [
            {
                backgroundColor: "grey",
                borderColor: "grey",
                data: [45, 40, 35, 30, 25, 20, 15, 10, 5, 0],
                fill: "none",
                lineTension: 0,
            },
            {
                backgroundColor: "#fe5f55",
                borderColor: "#fe5f55",
                data: [45, 42, 33, 33, 22, 18, 18, 12, 8, 4],
                fill: "none",
                lineTension: 0,
            },
            {
                backgroundColor: "#fe5f55",
                borderColor: "#fe5f55",
                data: [40, 38, 32, 27, 20, 13, 9, 8, 5, 3],
                fill: "none",
                lineTension: 0,
                type: "bar",
            },
        ],
    },
    options: {
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    display: false,
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    display: false,
                },
            ],
        },
        legend: {
            display: false,
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

    emailjs.send("service_dal3dto", "template_mpjbvmu", {
        name,
        email,
        message,
    });

    inputEmail.value = "";
    inputName.value = "";
    inputMessage.value = "";

    document.getElementById("message-success").className = "contact__success";

    // send logic
}

document
    .getElementById("submit-button")
    .addEventListener("click", handleSubmit);
