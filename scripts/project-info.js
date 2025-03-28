const projectInfo = [
  {
    imgSrc: "images/lgts/lgts-screen.jpg",
    name: "Little Goody Two Shoes",
    modalIFrameURL: "https://www.youtube.com/embed/7zJnQvDRzO0?si=ILmvR_KnQh1angem",
    skills: ["csharp", "unity", "xbox"],
    descriptionParagaphs: [
      `Little Goody Two Shoes is a video game
        that includes elements of anime-inspired
        role-playing, adventure, and horror
        games. Players control a girl who
        attempts to avoid horrific monsters in
        enchanted woods while trying to find a
        way to escape her mundane life.`,
      `This game is developed by AstralShift and published by Square Enix Collective. 
        It is currently available for PC, PS5, XBOX, and Nintendo Switch. 
        I was part of a vendor (Joydrop) that assisted with development 
        in porting to consoles.`,
      `I worked primarily with porting to the Xbox console. 
            I helped with various console specific issues and UI programming 
            to make sure it adapts to the controller scheme. 
            I was also a part of the team to address and fix bugs from live 
            testing to make sure we met the release deadline.`,
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
      `Circle Mobile is a mobile application for drivers to track and manager their delivery status with their logistics team. 
      This app utilizes the Full Circle TMS system that carriers subscribe to and then have their drivers download the app. 
      They are able to share their current position, provide event updates (Arrive, Load, Deliver), and also upload pictures and other documents 
      to their order that is stored on the server. Dispatch teams can then view all this information on the Full Circle Web application`,
      `This is my current full time employment. With previous experience in mobile development, I was task to recreate their mobile application. 
      It was originally built in Xamarin (C#). However, it has now become deprecrecated and will need to be update to another framework. I took the old application 
      and built it from the ground up using React Native and Expo for distribution. It is currently in testing phase and plan to be release on Android and iOS to be 
      an update that replaces the old application.`,
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
      `Path of Titans is a MMO Survival game where you play as Dinosaurs in prehistoric times. 
            Complete the quest, challenge other players, and grow your dino from a youngling to a roaring adult!`,
      `This game is being developed by Alderon Games in Unreal Engine 5. 
            I was part of a third party team (Joydrop) who joined in to assist them in 
            creating major updates to the game. These updates included new flying and 
            swimming dinosaurs, brand new combat and abilities, and more quest updates.`,
      `My noteable work was expanding on their combat system to implement Area of 
            Effect attacks and other additional abilities. I also assisted in some optimization issues and a handful of bugs.`,
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
      `Rocket Recover is an immersive mobile game 
            designed for Android and iOS platforms released under Cat Splat Studios.
            The game challenges players to navigate through obstacles 
            with a selection of ships, each boasting unique stats 
            and powers, enhancing the pursuit of high scores. 
            Key features include customizable environments, and integrated 
            services like leaderboards for competitive play and ads for 
            monetization.`,
      `This project represents a significant milestone in my career as it was my first attempt at 
            designing and developing a game from start to finish. Although no 
            longer available on the app stores, Rocket Recover's development 
            process showcases my comprehensive skill set in mobile game development.`,
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
      `Chatnonymous is a chat web application
            that allows users to communicate
            anonymously. This was designed to create
            an environment where people can share
            their thoughts together without the
            concern of identity attached to the
            conversation. This allows discussions to
            happen at the clearest level so everyone
            in that environment can comprehend and
            understand without judgment.`,
      `I developed this app after graduating from
            Fanshawe College. There is both a client
            (React) and a server (NodeJS) that uses
            WebSocket communication. All information
            is handled on the server, meaning no
            data is stored on any database to keep
            all user's identities and conversation
            private and within the moment.`,
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
      `I love the western theme! So I decided
            to use my Oculus to start developing
            some VR games! This is the first mini
            game in a mixture of western shooter
            themes. You have two revolvers and must
            shoot as many flying barrels as
            possible.`,
      `This uses Unity Open XR and XR
            interaction toolkit to establish the
            base mechanics, I added the gunplay
            ability for shooting and reloading.
            Plans are to add other mini games like a
            western standoff mini game and other
            ideas!`,
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
      `As the Technical Lead on "Capstan Gate," a first-person stealth 
            horror game developed as a final project at Toronto Film School, 
            I spearheaded a team of three programmers, guiding the project's 
            vision and maintaining development standards. My role extended 
            beyond leadership; I was directly involved in crafting the game's 
            core mechanics, and enemy AI, focusing on perception and pathfinding.`,
      `One of my key contributions was the creation of a nuanced coordinated 
            takedown mechanic, a feature that seamlessly integrated animations from 
            the first-person perspective, enhancing the game's realism and player 
            engagement. This technical feat not only elevated the gameplay experience 
            but also led me to produce a tutorial video, which has attracted over 
            2,000 views on YouTube, showcasing the mechanic's intricacies and my 
            ability to convey complex technical concepts to a wider audience.`,
    ],
    actionButtons: [
      {
        text: "View Game",
        url: "https://pathoftitans.com/",
      },
    ],
  },
  {
    imgSrc: "images/websites/parkwaywebsite.jpg",
    name: "",
    modalImgSrc: "images/websites/pg-logo.png",
    skills: ["html5", "css3", "javascript"],
    descriptionParagaphs: [
      `This client wanted to separate their landscaping services from their primary garden center website, 
      creating a dedicated online presence. I collaborated with them to design a clean, responsive site that 
      highlights their offerings while providing a seamless way for potential customers to get in touch. The 
      site features a streamlined contact form that sends inquiries directly to their inbox, enabling quick and 
      effective communication. Built entirely with HTML, CSS, and JavaScript, the website is lightweight, fully 
      customizable, and tailored specifically to the client's needs with google analytics integrated within the pages.`,
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
    name: "",
    modalImgSrc: "images/websites/catsplat-logo.png",
    skills: ["javascript", "react", "css3"],
    descriptionParagaphs: [
      `This website was an early project I created in collaboration with friends from Toronto Film School to help promote their 
      indie game development studio. The design featured a distinctive black-and-white paint aesthetic with a parallax background 
      to showcase their in-development game title. Built using React, the site was designed with scalability in mind—serving as the 
      foundation for a future ecosystem where their games, services, and updates could thrive.`,
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
    name: "Geotab Add In Application",
    skills: ["react", "javascript", "material-ui", "firebase"],
    descriptionParagaphs: [
      `After my time working at Geotab (a telematics company), a client reached out to me to ask if I could develop an application that 
      can integrate into the geotab systems to manage documents. With my experience already using the geotab SDK, I was able to create a 
      small react application that lives inside geotab for users to manage their documents between drivers, vehicles, and trailers.`,
      `There are 2 different versions of the app, one is for the admins to go in a add, create or delete the documents and sort them accordingly.
      There is then a second driver app that is use as a read only to view specifically documents that are link to the driver or their vehicle.`,
      `This is an ongoing project that I continue to work on to improve fore the client when needed.`,
    ],
    actionButtons: [],
  },
];

const webAndMobileProjects = [projectInfo[1], projectInfo[9], projectInfo[4]]; // Cover Me Pro, Chatnonymous
const videoGameProjects = [projectInfo[0], projectInfo[2], projectInfo[3], projectInfo[5]]; // Goody, Path of Titans, Western, Capstan
const websiteProjects = [projectInfo[7], projectInfo[8]]; // You can tweak as needed
