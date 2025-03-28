function setupSlider(containerId, projects) {
  const slider = document.getElementById(containerId);
  if (!slider) return;

  const slides = [];

  // Create slide elements
  projects.forEach((project, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.transform = `translateX(${index * 100}%)`;

    const img = document.createElement("img");
    img.className = "slide__image";
    img.src = project.imgSrc;
    img.alt = project.name;
    slide.appendChild(img);

    if (!window.mobileAndTabletCheck()) {
      const overlay = document.createElement("div");
      overlay.className = "slide__overlay";

      const title = document.createElement("h2");
      title.innerHTML = project.name;

      const btn = document.createElement("button");
      btn.className = "button-main overlay-info";
      btn.innerText = "Click for more info";
      btn.onclick = () => OpenProjectModal(project);

      overlay.appendChild(title);
      overlay.appendChild(btn);
      slide.appendChild(overlay);
    } else {
      // For mobile, allow full slide click to open modal
      slide.onclick = () => OpenProjectModal(project);
    }

    slider.appendChild(slide);
    slides.push(slide);
  });

  // Navigation buttons
  const btnNext = document.createElement("button");
  btnNext.className = "btn btn-next";
  btnNext.innerHTML = ">";
  const btnPrev = document.createElement("button");
  btnPrev.className = "btn btn-prev";
  btnPrev.innerHTML = "<";

  slider.appendChild(btnNext);
  slider.appendChild(btnPrev);

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const updateSlides = () => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  };

  btnNext.onclick = () => {
    curSlide = curSlide === maxSlide ? 0 : curSlide + 1;
    updateSlides();
    stopAuto();
  };

  btnPrev.onclick = () => {
    curSlide = curSlide === 0 ? maxSlide : curSlide - 1;
    updateSlides();
    stopAuto();
  };

  let autoSlide = setInterval(() => {
    btnNext.click();
  }, 5000);

  const stopAuto = () => clearInterval(autoSlide);

  // --- TOUCH SUPPORT ---
  let isDragging = false;
  let startX = 0;

  const onTouchStart = (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    stopAuto();
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX;
    const delta = moveX - startX;

    if (delta > 50) {
      btnPrev.click();
      isDragging = false;
    } else if (delta < -50) {
      btnNext.click();
      isDragging = false;
    }
  };

  const onTouchEnd = () => {
    isDragging = false;
  };

  slides.forEach((slide) => {
    slide.addEventListener("touchstart", onTouchStart);
    slide.addEventListener("touchmove", onTouchMove);
    slide.addEventListener("touchend", onTouchEnd);
    slide.addEventListener("touchcancel", onTouchEnd);
  });

  updateSlides(); // initial layout
}

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

setupSlider("slider-web", webAndMobileProjects);
setupSlider("slider-games", videoGameProjects);
setupSlider("slider-website", websiteProjects);
