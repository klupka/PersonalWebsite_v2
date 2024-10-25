import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceCard = ({
    jobId,
    startDate,
    endDate,
    jobTitle,
    companyName,
    jobDescription,
    companyWebLink,
    hoveringExperienceCard,
    setHoveringExperienceCard,
}) => {
    return (
        <a // hover:translate-y-[-2%]
            className={`w-full flex rounded-3xl p-5 group transition-[transform, opacity] duration-100 ease-in-out opacity-100 bg-foreground hover:bg-highlightForeground ${
                hoveringExperienceCard === jobId ? "opacity-100" : ""
            } ${
                hoveringExperienceCard !== jobId &&
                hoveringExperienceCard !== -1 &&
                hoveringExperienceCard !== null
                    ? "opacity-40"
                    : ""
            }`}
            href={companyWebLink}
            target="_blank"
            onMouseEnter={() => setHoveringExperienceCard(jobId)}
            onMouseLeave={() => setHoveringExperienceCard(0)}
        >
            <div className="w-[25%] text-text/70 text-xs pt-[0.25rem]">
                {startDate} — {endDate}
            </div>
            <div className="w-[75%]">
                <div className="text-lg font-[500] flex gap-2 items-center">
                    <span>{jobTitle}</span>
                    <span className="text-xs opacity-100">•</span>
                    <span className="opacity-100">{companyName}</span>
                    <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-xs ml-2 group-hover:translate-x-[25%] group-hover:translate-y-[-25%] group-hover:scale-125 transition-transform duration-200 ease-in-out text-text opacity-70 group-hover:opacity-100"
                    />
                </div>
                <div className="text-sm mt-2 text-text/70 font-[300]">
                    {jobDescription}
                </div>
            </div>
        </a>
    );
};

export default ExperienceCard;
