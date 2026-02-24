function shuffleProjects(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

function setupSlider(containerId, projects) {
  const slider = document.getElementById(containerId);
  if (!slider || !projects || projects.length === 0) return;

  const randomizedProjects = shuffleProjects(projects);

  const slides = [];

  // Create slide elements
  randomizedProjects.forEach((project, index) => {
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

  let curSlide = Math.floor(Math.random() * slides.length);
  const maxSlide = slides.length - 1;

  const updateSlides = () => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  };

  const goNext = () => {
    curSlide = curSlide === maxSlide ? 0 : curSlide + 1;
    updateSlides();
  };

  const goPrev = () => {
    curSlide = curSlide === 0 ? maxSlide : curSlide - 1;
    updateSlides();
  };

  btnNext.onclick = () => {
    goNext();
    resetAutoPlay();
  };

  btnPrev.onclick = () => {
    goPrev();
    resetAutoPlay();
  };

  let autoPlayTimeout = null;

  const scheduleNextAutoPlay = () => {
    const nextDelay = 4000 + Math.floor(Math.random() * 3000);

    autoPlayTimeout = window.setTimeout(() => {
      const shouldAdvance = Math.random() >= 0.3;
      if (shouldAdvance) {
        goNext();
      } else {
        goPrev();
      }

      scheduleNextAutoPlay();
    }, nextDelay);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimeout !== null) {
      window.clearTimeout(autoPlayTimeout);
      autoPlayTimeout = null;
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    scheduleNextAutoPlay();
  };

  // --- TOUCH SUPPORT ---
  let isDragging = false;
  let startX = 0;

  const onTouchStart = (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    stopAutoPlay();
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
    resetAutoPlay();
  };

  slides.forEach((slide) => {
    slide.addEventListener("touchstart", onTouchStart);
    slide.addEventListener("touchmove", onTouchMove);
    slide.addEventListener("touchend", onTouchEnd);
    slide.addEventListener("touchcancel", onTouchEnd);
  });

  updateSlides();
  scheduleNextAutoPlay();
}

// Modal References
let modal = document.getElementById("myModal");
let modalTitle = modal ? modal.querySelector(".modal-header__title") : null;
let modalImage = modal ? modal.querySelector(".modal-header__image") : null;
let modalSkills = modal ? modal.querySelector(".modal-header__skills") : null;
let modalDescription = modal ? modal.querySelector(".modal-description") : null;
let modalActions = modal ? modal.querySelector(".modal-actions") : null;
let modalFeature = modal ? modal.querySelector(".modal-feature") : null;
let span = modal ? modal.getElementsByClassName("close")[0] : null;

if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (modal && event.target == modal) {
    modal.style.display = "none";
  }
};

function OpenProjectModal(project) {
  if (!modal || !modalTitle || !modalSkills || !modalDescription || !modalActions || !modalFeature) {
    return;
  }

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

  for (const skill of project.skills) {
    const skillIconImage = document.createElement("img");
    skillIconImage.src = "images/skill-logos/" + skill + ".png";
    skillIconImage.alt = skill;
    skillIconImage.width = 40;

    modalSkills.appendChild(skillIconImage);
  }

  modalDescription.innerHTML = "";

  for (const paragraph of project.descriptionParagaphs) {
    const p = document.createElement("p");
    p.innerHTML = paragraph;

    modalDescription.appendChild(p);
  }

  modalActions.innerHTML = "";

  for (const actionButton of project.actionButtons) {
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
