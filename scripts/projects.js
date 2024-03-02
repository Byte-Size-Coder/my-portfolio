/** SLIDER */

const slider = document.querySelector(".slider");

function addProjectSlide(project) {
    const slide = document.createElement("div");
    slide.className = "slide";

    const slideImage = document.createElement("img");
    slideImage.className = "slide__image";
    slideImage.src = project.imgSrc;
    slideImage.alt = project.name;

    if (!window.mobileAndTabletCheck()) {
        const slideOverlay = document.createElement("div");
        slideOverlay.className = "slide__overlay";

        const sliderOverlayTitle = document.createElement("h2");
        sliderOverlayTitle.innerHTML = project.name;

        const sliderOverlayMoreInfo = document.createElement("button");
        sliderOverlayMoreInfo.className = "button-main overlay-info";
        sliderOverlayMoreInfo.innerHTML = "Click for more info";

        sliderOverlayMoreInfo.addEventListener("click", () => {
            OpenProjectModal(project);
        });

        slideOverlay.appendChild(sliderOverlayTitle);
        slideOverlay.appendChild(sliderOverlayMoreInfo);

        slide.appendChild(slideImage);
        slide.appendChild(slideOverlay);
    } else {
        slide.appendChild(slideImage);
    }

    slider.appendChild(slide);
}

for (let project of projectInfo) {
    addProjectSlide(project);
}

const buttonNext = document.createElement("button");
buttonNext.classList.add("btn");
buttonNext.classList.add("btn-next");
buttonNext.innerHTML = ">";

const buttonPrevious = document.createElement("button");
buttonPrevious.classList.add("btn");
buttonPrevious.classList.add("btn-prev");
buttonPrevious.innerHTML = "<";

slider.appendChild(buttonNext);
slider.appendChild(buttonPrevious);

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;

function changeNextSlide() {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

function changePrevSlide() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

// Drag
let startX,
    isDragging = false;

const handleDragStart = (e) => {
    isDragging = true;
    startX = e.pageX;
};

const handleDragMove = (e) => {
    if (!isDragging) return;
    const dragDistance = e.pageX - startX;
    const slideDistance = dragDistance / slides[0].clientWidth;

    if (slideDistance > 0.25) {
        changePrevSlide();
        isDragging = false;
    } else if (slideDistance < -0.25) {
        changeNextSlide();
        isDragging = false;
    }
};

const handleDragEnd = () => {
    isDragging = false;
};

let autoSlideInterval = setInterval(changeNextSlide, 5000);

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
    slides.forEach((slide) => {
        slide.removeEventListener("touchstart", stopAutoSlide);
    });

    nextSlide.removeEventListener("click", stopAutoSlide);
    prevSlide.removeEventListener("click", stopAutoSlide);
};

slides.forEach((slide) => {
    slide.addEventListener("touchstart", handleDragStart);
    slide.addEventListener("touchmove", handleDragMove);
    slide.addEventListener("touchend", handleDragEnd);
    slide.addEventListener("touchcancel", handleDragEnd);

    slide.addEventListener("touchstart", stopAutoSlide);
});

const nextSlide = document.querySelector(".btn-next");
nextSlide.addEventListener("click", changeNextSlide);
nextSlide.addEventListener("click", stopAutoSlide);

const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click", changePrevSlide);
prevSlide.addEventListener("click", stopAutoSlide);

/** MODAL */

// Modal References
let modal = document.getElementById("myModal");
let modalTitle = modal.querySelector(".modal-header__title");
let modalImage = modal.querySelector(".modal-header__image");
let modalSkills = modal.querySelector(".modal-header__skills");
let modalDescription = modal.querySelector(".modal-description");
let modalActions = modal.querySelector(".modal-actions");
let modalFeature = modal.querySelector(".modal-feature");
let span = modal.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

if (window.mobileAndTabletCheck()) {
    const buttonView = document.querySelector(".btn-view");

    buttonView.hidden = false;

    buttonView.addEventListener("click", function () {
        OpenProjectModal(projectInfo[curSlide]);
    });
}

function OpenProjectModal(project) {
    modalTitle.innerHTML = project.name;

    if (project.modalImgSrc !== undefined) {
        modalImage.style.display = "block";
        modalImage.src = project.modalImgSrc;
    } else {
        modalImage.style.display = "none";
    }

    modalFeature.innerHTML = "";

    if (project.modalIFrameURL !== undefined) {
        const iframe = document.createElement("iframe");
        iframe.width = "300";
        iframe.height = "200";
        iframe.src = project.modalIFrameURL;
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

        modalFeature.appendChild(iframe);
    }

    modalSkills.innerHTML = "";

    for (skill of project.skills) {
        const skillIconImage = document.createElement("img");
        skillIconImage.src = "images/skill-logos/" + skill + ".png";
        skillIconImage.alt = skill;
        skillIconImage.width = 40;

        modalSkills.appendChild(skillIconImage);
    }

    modalDescription.innerHTML = "";

    for (paragraph of project.descriptionParagaphs) {
        const p = document.createElement("p");
        p.innerHTML = paragraph;

        modalDescription.appendChild(p);
    }

    modalActions.innerHTML = "";

    for (actionButton of project.actionButtons) {
        const actionBtn = document.createElement("button");
        actionBtn.className = "button-main";
        actionBtn.innerHTML = actionButton.text;
        actionBtn.onclick = function () {
            window.open(actionButton.url, "_blank").focus();
        };

        modalActions.append(actionBtn);
    }

    modal.style.display = "block";
}
