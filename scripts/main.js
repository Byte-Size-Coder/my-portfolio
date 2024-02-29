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
                entry.target
                    .querySelector(".card")
                    .classList.add("slide-from-left");
                entry.target
                    .querySelector(".card-section__images")
                    .classList.add("slide-from-right");
            }

            if (entry.target.classList.contains("card-section__right")) {
                entry.target
                    .querySelector(".card")
                    .classList.add("slide-from-right");
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

// function addEvent(date, description) {
//     const timeline = document.querySelector(".timeline");
//     const timelineItem = document.createElement("div");
//     timelineItem.className = "timeline-item";

//     const timelineItemContainer = document.createElement("div");
//     timelineItemContainer.className = "timeline-item-container";

//     const timelineTime = document.createElement("div");
//     timelineTime.className = "timeline-time";
//     timelineTime.textContent = date;

//     const timelineContent = document.createElement("div");
//     timelineContent.className = "timeline-content";
//     timelineContent.textContent = description;

//     timelineItemContainer.appendChild(timelineTime);
//     timelineItemContainer.appendChild(timelineContent);
//     timelineItem.appendChild(timelineItemContainer);
//     timeline.appendChild(timelineItem);
// }

// fetch("./timeline-info.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// // Add an event dynamically
// addEvent(
//     "April 2016",
//     "Worked as a Tutor during my time at Toronto Film school to teach previous term students programing (peer-to-peer and group sessions)"
// );
// addEvent(
//     "September 2017",
//     "Uploaded YouTube tutorial video on takedown gameplay mechanic. Received many views, comments, and inquiries."
// );
// addEvent(
//     "September 2018",
//     "Volunteer to tutor students during my time at the CPA program in Fanshawe College"
// );
// addEvent(
//     "December 2023",
//     "Educated team on Agile and Scrum processes to reimplement into our development workflow"
// );
// addEvent(
//     "January 2024",
//     "Joined the Fanshawe faculty as a part-time professor. Teaching the Game Component Intergration course for the Game Development Program (GDP)"
// );
// addEvent(
//     "Future",
//     "Looking to continue my teaching career at fanshawe while proving knowledge and experience to my fellow students and friend to get into the industry!"
// );

// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var overlays = document.getElementsByClassName("slide__overlay");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// for (var i = 0; i < overlays.length; i++) {
//     overlays[i].addEventListener("click", function () {
//         modal.style.display = "block";
//     });
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };
