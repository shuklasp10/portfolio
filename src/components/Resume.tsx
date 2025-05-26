import React from "react";
import { getMonthAndYear } from "../Utils/helper";
import { Resume as ResumeType } from "../Utils/Types";

interface PropType {
  resume: ResumeType,
  updatedAt: string,
}

const Resume: React.FC<PropType> = ({resume, updatedAt}) => {
  return (
    <section
      id="resume"
      className="card card_header grid_item col-span-2 row-span-2 work"
    >
      <div>
        <h2>Resume</h2>
        <p>{getMonthAndYear(updatedAt)}</p>
      </div>
      <div>
        <a
          href={resume.file.url}
          target="_blank"
        >
          <img className="icon" src={resume.viewIcon.dark.url} alt="view" title="View Resume" />
        </a>
        <a
          href={resume.file.url}
          download={`Resume`}
          target="_blank"
        >
          <img className="icon" src={resume.downloadIcon.dark.url} alt="download" title="Download Resume" />
        </a>
      </div>
    </section>
  );
};

export default Resume;
