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

window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
