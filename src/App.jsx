import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { experienceData, projectData } from "./data/data";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import {
    faArrowUpRightFromSquare,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import resumePDF from "./assets/Resume_Seth_Klupka.pdf";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [hoveringProjectCard, setHoveringProjectCard] = useState(null);
    const [hoveringExperienceCard, setHoveringExperienceCard] = useState(null);
    const [visibleSection, setVisibleSection] = useState(null);

    useEffect(() => {
        const aboutSection = document.getElementById("about");
        const experienceSection = document.getElementById("experience");
        const projectsSection = document.getElementById("projects");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(aboutSection);
        observer.observe(experienceSection);
        observer.observe(projectsSection);
    }, []);

    const scrollTo = (divID) => {
        const element = document.getElementById(divID);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`${isDarkMode ? "theme-dark" : "theme-light"}`}>
            <div
                className={`transition-all duration-500 ease-in-out text-text bg-background h-full selection:bg-highlightPrimary selection:text-text`}
            >
                {/* Change to fully 1 column at 1025px and lower*/}
                <div className="flex flex-col min-[1025px]:flex-row h-full max-w-[1300px] mx-auto">
                    <div className="min-[1025px]:w-[40%] min-[1025px]:h-screen min-[1025px]:sticky min-[1025px]:top-0">
                        <div className="h-full flex flex-col justify-between pt-10 min-[1025px]:pt-20 px-5 min-[1025px]:px-10 pb-10">
                            <div className="h-1/3">
                                <div className="flex flex-col gap-3">
                                    <div className="font-[600] leading-[3rem] min-[1025px]:text-[3.5rem] text-[2.25rem]">
                                        Seth Klupka
                                    </div>
                                    <div className="text-lg font-[500] leading-[1rem] xmt-1">
                                        Software Engineer
                                    </div>
                                    <div className="text-text/70 w-[20rem] font-[300] mt-1">
                                        Passionate about creating impactful,
                                        user-friendly applications.
                                    </div>
                                </div>
                                <div className="italic flex-col items-start justify-center gap-2 w-full mt-10 hidden min-[1025px]:flex">
                                    <button
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        className={`px-4 py-3 w-full rounded-full text-left hover:bg-highlightForeground ${
                                            visibleSection === "about"
                                                ? "bg-primary hover:bg-highlightPrimary font-[500]"
                                                : "text-text/80 font-[300]"
                                        }`}
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => {
                                            scrollTo("experience");
                                        }}
                                        className={`px-4 py-3 rounded-full w-full text-left hover:bg-highlightForeground ${
                                            visibleSection === "experience"
                                                ? "bg-primary hover:bg-highlightPrimary font-[500]"
                                                : "text-text/80 font-[300]"
                                        }`}
                                    >
                                        Experience
                                    </button>
                                    <button
                                        onClick={() => {
                                            scrollTo("projects");
                                        }}
                                        className={`px-4 py-3 rounded-full w-full text-left hover:bg-highlightForeground ${
                                            visibleSection === "projects"
                                                ? "bg-primary hover:bg-highlightPrimary font-[500]"
                                                : "text-text/80 font-[300]"
                                        }`}
                                    >
                                        Projects
                                    </button>
                                </div>
                            </div>

                            <div className="h-1/2 flex items-end justify-between mt-5 min-[1025px]:mt-0">
                                <div className="flex gap-5">
                                    <a
                                        className="bg-highlightForeground p-3 rounded-full group"
                                        href="https://github.com/klupka"
                                        target="_blank"
                                    >
                                        <div className="group-hover:opacity-100 opacity-70 flex justify-center items-center gap-3 text-sm transition-opacity duration-200 ease-in-out text-text w-[1rem] h-[1rem]">
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className="h-6 w-6"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        className="bg-highlightForeground p-3 rounded-full group"
                                        href="https://www.linkedin.com/feed/"
                                        target="_blank"
                                    >
                                        <div className="group-hover:opacity-100 opacity-70 flex justify-center items-center gap-3 text-sm transition-opacity duration-200 ease-in-out text-text w-[1rem] h-[1rem]">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                className="h-6 w-6"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <button
                                    className="border-2 border-highlightForeground p-3 rounded-full group overflow-hidden"
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                >
                                    <div className="group-hover:opacity-100 opacity-70 flex justify-center items-center gap-3 text-sm transition-opacity duration-200 ease-in-out text-text w-[1rem] h-[1rem]">
                                        <FontAwesomeIcon
                                            icon={isDarkMode ? faSun : faMoon}
                                            className="text-2xl"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="min-[1025px]:w-[60%] h-full mt-20">
                        <div className="flex flex-col gap-[5rem] px-5 min-[1025px]:px-10">
                            <div
                                id="about"
                                className="text-text/70 flex flex-col gap-5 font-[300]"
                            >
                                <div className="text-text text-xl font-[500] mb-5">
                                    About
                                </div>
                                <div>
                                    I'm a full-stack software engineer
                                    passionate about creating user-friendly
                                    applications that balance functionality and
                                    design. With expertise in JavaScript, React,
                                    Node.js, and MongoDB, I excel in both
                                    collaborative and independent environments.
                                </div>
                                <div>
                                    At the University of Texas at San Antonio, I
                                    led research on a hardware system for
                                    AI-driven traffic crash notifications,
                                    presenting findings at conferences like
                                    <a
                                        href="https://icibm2022.iaibm.org/"
                                        target="_blank"
                                        className="font-[500] hover:text-highlightSecondary text-text"
                                    >
                                        {" "}
                                        ICIBM 2022
                                    </a>
                                    . This experience enhanced my ability to
                                    communicate complex ideas and approach
                                    challenges with a problem-solving mindset.
                                </div>
                                <div>
                                    In projects like{" "}
                                    <a
                                        href="https://postack-40rm.onrender.com/"
                                        target="_blank"
                                        className="font-[500] hover:text-highlightSecondary text-text"
                                    >
                                        {" "}
                                        Postack
                                    </a>
                                    , a Reddit-inspired forum, I honed my skills
                                    in user authentication, database management,
                                    and responsive design, always striving to
                                    optimize and innovate. I’m excited to apply
                                    my skills to new challenges and make an
                                    impact in the tech world.
                                </div>
                            </div>

                            <div>
                                <div
                                    id="experience"
                                    className={`flex flex-col gap-5 mb-5`}
                                    onMouseEnter={() =>
                                        setHoveringExperienceCard(0)
                                    }
                                    onMouseLeave={() =>
                                        setHoveringExperienceCard(-1)
                                    }
                                >
                                    <div className="text-text text-xl font-[500] mb-5">
                                        Experience
                                    </div>
                                    {experienceData.map((data, index) => {
                                        return (
                                            <div key={index}>
                                                <ExperienceCard
                                                    jobId={data.id}
                                                    startDate={data.startDate}
                                                    endDate={data.endDate}
                                                    jobTitle={data.jobTitle}
                                                    companyName={
                                                        data.companyName
                                                    }
                                                    jobDescription={
                                                        data.jobDescription
                                                    }
                                                    companyWebLink={
                                                        data.companyWebLink
                                                    }
                                                    setHoveringExperienceCard={
                                                        setHoveringExperienceCard
                                                    }
                                                    hoveringExperienceCard={
                                                        hoveringExperienceCard
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <a
                                    className="flex gap-2 items-center group mt-2 justify-center p-4 font-[500]"
                                    href={resumePDF}
                                    target="_blank"
                                >
                                    <span className="group-hover:underline underline-offset-4 decoration-highlightSecondary text-text hover:text-highlightSecondary">
                                        View Full Resume
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                        className="text-xs ml-2 group-hover:translate-x-[25%] group-hover:translate-y-[-25%] group-hover:scale-125 transition-transform duration-200 ease-in-out text-text opacity-70 group-hover:text-highlightSecondary group-hover:opacity-100"
                                    />
                                </a>
                            </div>

                            <div>
                                <div
                                    id="projects"
                                    className={`flex flex-col gap-5 mb-5`}
                                    onMouseEnter={() =>
                                        setHoveringProjectCard(0)
                                    }
                                    onMouseLeave={() =>
                                        setHoveringProjectCard(-1)
                                    }
                                >
                                    <div className="text-text text-xl font-[500] mb-5">
                                        Projects
                                    </div>
                                    {projectData.map((data, index) => {
                                        return (
                                            <div key={index}>
                                                <ProjectCard
                                                    projectId={data.id}
                                                    projectImage={
                                                        data.projectImage
                                                    }
                                                    projectTitle={
                                                        data.projectTitle
                                                    }
                                                    projectDescription={
                                                        data.projectDescription
                                                    }
                                                    projectWebLink={
                                                        data.projectWebLink
                                                    }
                                                    isDarkMode={isDarkMode}
                                                    tags={data.tags}
                                                    setHoveringProjectCard={
                                                        setHoveringProjectCard
                                                    }
                                                    hoveringProjectCard={
                                                        hoveringProjectCard
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <a
                                    className="flex gap-2 items-center group mt-2 justify-center p-4 font-[500]"
                                    href="https://github.com/klupka"
                                    target="_blank"
                                >
                                    <span className="group-hover:underline underline-offset-4 decoration-highlightSecondary text-text hover:text-highlightSecondary">
                                        View More Projects
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                        className="text-xs ml-2 group-hover:translate-x-[25%] group-hover:translate-y-[-25%] group-hover:scale-125 transition-transform duration-200 ease-in-out text-text opacity-70 group-hover:text-highlightSecondary group-hover:opacity-100"
                                    />
                                </a>
                            </div>
                            <div className="mb-20 text-text/40 font-light">
                                Designed and coded by Seth Klupka. Built with
                                <a
                                    href="https://vite.dev/"
                                    target="_blank"
                                    className="font-[400] hover:text-highlightSecondary text-text/60"
                                >
                                    {" "}
                                    Vite
                                </a>
                                ,{" "}
                                <a
                                    href="https://react.dev/"
                                    target="_blank"
                                    className="font-[400] hover:text-highlightSecondary text-text/60"
                                >
                                    {" "}
                                    React
                                </a>
                                , and{" "}
                                <a
                                    href="https://tailwindcss.com/"
                                    target="_blank"
                                    className="font-[400] hover:text-highlightSecondary text-text/60"
                                >
                                    {" "}
                                    Tailwind CSS
                                </a>
                                , deployed with{" "}
                                <a
                                    href="https://pages.github.com/"
                                    target="_blank"
                                    className="font-[400] hover:text-highlightSecondary text-text/60"
                                >
                                    {" "}
                                    GitHub Pages
                                </a>
                                . All text is set in the Roboto typeface.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
