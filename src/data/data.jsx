import dungeonDashImg from "../assets/project_images/DungeonDashImage.png";
import retroCalculatorImg from "../assets/project_images/RetroCalculatorImage.png";
import libraryImg from "../assets/project_images/LibraryImage.png";
import weatherImg from "../assets/project_images/WeatherAppImage.png";
import postackImg from "../assets/project_images/PostackImg.png";

export const experienceData = [
    {
        id: 1,
        startDate: "2024",
        endDate: "PRESENT",
        jobTitle: "Data Annotator",
        companyName: "DataAnnotation",
        jobDescription:
            "Accurately label and categorize datasets to support machine learning models. Ensure data is structured and interpreted correctly for training AI algorithms, which contributes to the development of intelligent systems.",
        companyWebLink: "https://www.dataannotation.tech/",
    },
    {
        id: 2,
        startDate: "2022",
        endDate: "2023",
        jobTitle: "Undergraduate Researcher",
        companyName: "UTSA",
        jobDescription:
            "Developed a low-maintenance AI system for traffic crash risk notifications in a multidisciplinary project. Led hardware assembly and programmed data flow operations using Python and Arduino. Presented at ICIBM 2022, Baylor University, and UTSA, providing ongoing support for five months post-graduation.",
        companyWebLink:
            "https://provost.utsa.edu/undergraduate-research/mcnair.html",
    },
];

export const projectData = [
    {
        id: 1,
        projectImage: postackImg,
        projectTitle: "Postack",
        projectDescription:
            "A forum application built on the MERN stack, drawing inspiration from various social media platforms, with Reddit as its primary influence. Users share posts, comment, and reply in thread-based discussions.",
        projectWebLink: "https://postack-40rm.onrender.com/",
        tags: "React, Node.js, Express.js, MongoDB, JavaScript, Passport.js, Axios, React Router, Tailwind, HTML, CSS",
    },
    {
        id: 2,
        projectImage: dungeonDashImg,
        projectTitle: "Dungeon Dash",
        projectDescription:
            "A single-page web app where you play as a thief on a mission to gather riches in an endless castle tower. Navigate obstacles, evade enemies, and grab loot.",
        projectWebLink: "https://klupka.github.io/DungeonDash/",
        tags: "JavaScript, HTML Canvas, HTML, CSS",
    },
    {
        id: 3,
        projectImage: retroCalculatorImg,
        projectTitle: "Retro Calc",
        projectDescription:
            "A calculator web app featuring a custom-designed user interface that evokes a nostalgic feel while also including some modern additions. Project was undertaken without relying on any calculator-related tutorials or guides, representing a self-imposed challenge.",
        projectWebLink: "https://klupka.github.io/RetroCalculator/",
        tags: "React, Tailwind, HTML, CSS",
    },
    {
        id: 4,
        projectImage: libraryImg,
        projectTitle: "Library",
        projectDescription:
            "An application for managing a library, enabling users to add, modify, and remove books. Uses MERN stack (MongoDB, Express.js, React.js, Node.js). Developed with a focus on learning full stack operations.",
        projectWebLink: "https://sethklupka-library.netlify.app/",
        tags: "React, Node.js, Express.js, MongoDB, JavaScript, Axios, React Router, Tailwind, HTML, CSS",
    },
    {
        id: 5,
        projectImage: weatherImg,
        projectTitle: "Weather",
        projectDescription:
            "Fetch and display weather data for your current location and other locations through search functionality. Built with Vite + React and utilizes various APIs: IPWHOIS.IO, geocode.maps.co, Open-Meteo. Developed with a focus on learning and integrating public APIs.",
        projectWebLink: "https://klupka.github.io/Weather/",
        tags: "React, Chart.js, Axios, HTML, CSS",
    },
];
