const projectInfo = [
  {
    imgSrc: "images/lgts/lgts-screen.jpg",
    name: "Little Goody Two Shoes",
    modalIFrameURL: "https://www.youtube.com/embed/7zJnQvDRzO0?rel=0&modestbranding=1&playsinline=1",
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
  {
    imgSrc: "",
    name: "EchoGrounds",
    skills: ["typescript", "react", "csharp", "azure", "terraform"],
    descriptionParagaphs: [
      `EchoGrounds is a cloud-native language preservation platform designed to empower the Delaware Nation to document, manage, and teach their traditional language. The system serves as both a secure digital archive and an accessible educational tool.`,
      `The platform is architected with Data Sovereignty as its core principle. It creates a strict separation between the software logic (the "Engine") and the cultural content (the "Fuel"), ensuring that all intellectual property regarding language, audio, and stories remains under the exclusive ownership of the Nation.`,
    ],
    actionButtons: [
      {
        text: "View Website",
        url: "https://catsplatstudios.com/",
      },
    ],
  },
  {
    imgSrc: "",
    name: "AIAI Match Game",
    skills: ["csharp", "unity", "google-play", "ios"],
    descriptionParagaphs: [
      `AIAI Match is an interactive educational app built as a solo project for the Association of Iroquois and Allied Indians (AIAI), transforming the classic memory-match mechanic into a cultural learning experience for classrooms, families, and lifelong learners.`,
      `I handled the full development cycle end-to-end, including gameplay systems, UI implementation, and release preparation for both Android and iOS. Because the app is interface-heavy, I used an MVC approach with a simple stack-based system to manage UI page structure and navigation.`,
      `The long-term roadmap is to expand the app with additional learning topics powered by external content sources connected through Firebase.`,
    ],
    actionButtons: [
      {
        text: "Android Store",
        url: "https://play.google.com/store/apps/details?id=com.bytesizecoder.aiaimatch&hl=en",
      },
      {
        text: "iOS Store",
        url: "https://apps.apple.com/ca/app/aiai-match/id6742747458",
      },
    ],
  },

];

const getProjectsByName = (names) =>
  names
    .map((name) => projectInfo.find((project) => project.name === name))
    .filter(Boolean);

const webAndMobileProjects = getProjectsByName([
  "EchoGrounds",
  "Circle Mobile",
  "Geotab Add-In Application",
  "Chatnonymous",
]);

const videoGameProjects = getProjectsByName([
  "Little Goody Two Shoes",
  "Path of Titans",
  "AIAI Match Game",
  "Rocket Recover",
  "Western VR Shooter",
]);

const websiteProjects = getProjectsByName([
  "Cat Splat Studios Website",
]);
