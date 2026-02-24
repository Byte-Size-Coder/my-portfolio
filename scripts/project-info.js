const projectInfo = [
  {
    imgSrc: "images/lgts/lgts-screen.jpg",
    name: "Little Goody Two Shoes",
    modalIFrameURL: "https://www.youtube.com/embed/7zJnQvDRzO0?si=ILmvR_KnQh1angem",
    skills: ["csharp", "unity", "xbox"],
    descriptionParagaphs: [
      `Little Goody Two Shoes is a narrative-driven RPG with adventure and horror elements, featuring stylized anime-inspired art direction and systems-focused gameplay.`,
      `The title was developed by AstralShift and published by Square Enix Collective for PC, PlayStation 5, Xbox, and Nintendo Switch. I contributed through Joydrop as part of the external development team supporting console delivery.`,
      `My primary focus was Xbox platform support, including controller-focused UI updates, console-specific issue resolution, and release-quality bug fixing during final QA cycles.`,
    ],
    actionButtons: [
      {
        text: "View Game",
        url: "https://little-goody-two-shoes.square-enix-games.com/en-us/",
      },
    ],
  },
  {
    imgSrc: "images/circlemobile/circlemobilestops.webp",
    name: "Circle Mobile",
    modalImgSrc: "images/circlemobile/circlemobilestops.webp",
    skills: ["react", "expo", "typescript", "csharp"],
    descriptionParagaphs: [
      `Circle Mobile is a logistics application that enables drivers to manage deliveries in real time and share status updates with dispatch teams. It supports key workflows such as stop events, location updates, and document/photo uploads linked to orders.`,
      `As part of my full-time role, I led the modernization of the app from Xamarin to React Native with Expo. I rebuilt the product from the ground up to improve maintainability, delivery speed, and long-term platform support for iOS and Android.`,
    ],
    actionButtons: [
      {
        text: "Learn More",
        url: "https://fullcircletms.com/product-circle-mobile/",
      },
    ],
  },
  {
    imgSrc: "images/pot/pot.jpg",
    name: "Path of Titans",
    modalImgSrc: "images/pot/pot-logo.png",
    skills: ["cplusplus", "ue4"],
    descriptionParagaphs: [
      `Path of Titans is a multiplayer dinosaur survival game where players complete quests, grow their creatures, and engage in large-scale online interactions.`,
      `I supported Alderon Games through Joydrop on major feature updates, including content expansions for flight and aquatic gameplay systems, combat updates, and quest improvements.`,
      `My contributions included extending combat mechanics with area-of-effect abilities, addressing performance bottlenecks, and resolving gameplay bugs to improve stability and player experience.`,
    ],
    actionButtons: [
      {
        text: "View Game",
        url: "https://pathoftitans.com/",
      },
    ],
  },
  {
    imgSrc: "images/rocket-recover/RocketRecover.gif",
    name: "Rocket Recover",
    modalImgSrc: "images/rocket-recover/poster-rr.png",
    skills: ["csharp", "unity", "google-play", "ios"],
    descriptionParagaphs: [
      `Rocket Recover is an arcade-style mobile game released under Cat Splat Studios for Android and iOS. Players navigate obstacle-heavy levels using ships with unique attributes and progression-focused mechanics.`,
      `This project was my first full end-to-end game release, covering design, engineering, publishing, and live feature integration such as leaderboards and monetization systems.`,
    ],
    actionButtons: [
      {
        text: "View Gameplay",
        url: "https://youtu.be/6MBp4RPGWVM",
      },
      {
        text: "Github Repo",
        url: "https://github.com/Cat-Splat-Studios/Project_ShipJump",
      },
    ],
  },
  {
    imgSrc: "images/chatnonymous/screenshot.png",
    name: "Chatnonymous",
    modalImgSrc: "images/chatnonymous/chatnonymous.png",
    skills: ["javascript", "react", "material-ui", "node-js"],
    descriptionParagaphs: [
      `Chatnonymous is a real-time anonymous chat platform designed to encourage open, low-friction conversation without persistent identity profiles.`,
      `The application is built with a React client and a Node.js WebSocket backend. Session data is intentionally transient and not stored in a database to preserve privacy-first behavior.`,
    ],
    actionButtons: [
      {
        text: "Try It Out",
        url: "https://chatnonymous.fly.dev/",
      },
      {
        text: "Github Repo",
        url: "https://github.com/Byte-Size-Coder/chatnonymous",
      },
    ],
  },
  {
    imgSrc: "images/westernVR/WesternVRShooterDemo.gif",
    name: "Western VR Shooter",
    modalImgSrc: "images/logo/bsc-logo-icon.png",
    skills: ["csharp", "unity", "meta"],
    descriptionParagaphs: [
      `Western VR Shooter is a VR prototype exploring arcade action in a western setting, built for Oculus/Meta hardware. Players dual-wield revolvers and engage in score-based target challenges.`,
      `The prototype uses Unity OpenXR and XR Interaction Toolkit, with custom weapon interaction and reload systems layered on top of the core VR framework.`,
    ],
    actionButtons: [
      {
        text: "View Demo",
        url: "https://chatnonymous.fly.dev/",
      },
      {
        text: "Github Repo",
        url: "https://github.com/Byte-Size-Coder/chatnonymous",
      },
    ],
  },
  {
    imgSrc: "images/capstan-gate/capstan-doctor.jpg",
    name: "Capstan Gate",
    modalIFrameURL: "https://www.youtube.com/embed/jd_Ziwqyygg?start=5",
    skills: ["cplusplus", "ue4"],
    descriptionParagaphs: [
      `Capstan Gate is a first-person stealth horror project completed as a capstone at Toronto Film School, where I served as Technical Lead for a three-programmer team.`,
      `I led implementation standards and contributed directly to core gameplay systems, including enemy perception and navigation logic, while coordinating technical delivery across the team.`,
      `A standout contribution was a coordinated takedown system with first-person animation blending. I also produced a technical breakdown video to document and demonstrate the mechanic.`,
    ],
    actionButtons: [
      {
        text: "View Project",
        url: "https://pathoftitans.com/",
      },
    ],
  },
  {
    imgSrc: "images/websites/parkwaywebsite.jpg",
    name: "Parkway Landscaping Website",
    modalImgSrc: "images/websites/pg-logo.png",
    skills: ["html5", "css3", "javascript"],
    descriptionParagaphs: [
      `This client project established a standalone digital presence for landscaping services, separate from the company’s main garden center website.`,
      `I designed and developed a lightweight, responsive site focused on service clarity and lead capture, including a streamlined inquiry form and Google Analytics integration for performance tracking.`,
    ],
    actionButtons: [
      {
        text: "View Website",
        url: "https://www.pglandscaping.ca/index.html",
      },
    ],
  },
  {
    imgSrc: "images/websites/catsplatwebsite.jpg",
    name: "Cat Splat Studios Website",
    modalImgSrc: "images/websites/catsplat-logo.png",
    skills: ["javascript", "react", "css3"],
    descriptionParagaphs: [
      `This early collaboration with classmates from Toronto Film School supported the online launch of an indie game studio brand.`,
      `Built with React, the site introduced a distinctive visual identity and established a scalable content foundation for future game, service, and studio updates.`,
    ],
    actionButtons: [
      {
        text: "View Website",
        url: "https://catsplatstudios.com/",
      },
    ],
  },
  {
    imgSrc: "images/webappdocs/geotabAddinApp.png",
    name: "Geotab Add-In Application",
    skills: ["react", "javascript", "material-ui", "firebase"],
    descriptionParagaphs: [
      `This custom Geotab add-in was developed for document management across drivers, vehicles, and trailers, built directly within the Geotab ecosystem.`,
      `Leveraging prior experience with the Geotab SDK, I delivered a React-based solution with role-specific workflows, including an admin management interface and a driver-focused read-only experience.`,
      `The project is actively maintained and iterated based on client operational needs.`,
    ],
    actionButtons: [],
  },
];

const webAndMobileProjects = [projectInfo[1], projectInfo[9], projectInfo[4]];
const videoGameProjects = [projectInfo[0], projectInfo[2], projectInfo[3], projectInfo[5]];
const websiteProjects = [projectInfo[7], projectInfo[8]];
