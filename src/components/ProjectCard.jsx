import React, { useState } from "react";
import {
    faArrowRight,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({
    projectId,
    projectImage,
    projectTitle,
    projectDescription,
    projectWebLink,
    isDarkMode,
    tags,
    setHoveringProjectCard,
    hoveringProjectCard,
}) => {
    if (tags !== undefined) {
        const tagsArray = tags.split(",");

        return (
            <a
                className={`w-full flex flex-col min-[1025px]:flex-row gap-5 rounded-3xl p-5 group transition-[transform, opacity] duration-100 ease-in-out opacity-100 bg-foreground hover:bg-highlightForeground ${
                    hoveringProjectCard === projectId ? "opacity-100" : ""
                } ${
                    hoveringProjectCard !== projectId &&
                    hoveringProjectCard !== -1 &&
                    hoveringProjectCard !== null
                        ? "opacity-40"
                        : ""
                }`}
                href={projectWebLink}
                target="_blank"
                onMouseEnter={() => setHoveringProjectCard(projectId)}
                onMouseLeave={() => setHoveringProjectCard(0)}
            >
                <div className="min-[1025px]:w-[25%] mr-2">
                    <img
                        src={projectImage}
                        className={`aspect-square border-2 border-transparent group-hover:border-text transition-all duration-100 rounded-2xl`}
                    />
                </div>
                <div className="min-[1025px]:w-[75%]">
                    <div className="opacity-100 flex gap-2 items-center">
                        <span className="min-[1025px]:text-base text-[1rem] font-[500]">
                            {projectTitle}
                        </span>
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-xs ml-2 group-hover:translate-x-[25%] group-hover:translate-y-[-25%] group-hover:scale-125 transition-transform duration-200 ease-in-out text-text opacity-70 group-hover:opacity-100"
                        />
                    </div>
                    <div className="text-sm mt-2 text-text/70 font-[300]">
                        {projectDescription}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5">
                        {tagsArray.map((tag, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`py-[.35rem] px-3 font-[500] text-highlightSecondary bg-secondary opacity-100 w-fit rounded-full text-xs`}
                                >
                                    {tag}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </a>
        );
    }
};

export default ProjectCard;
