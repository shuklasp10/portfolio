import { download, view } from "../assets/icons";
import { toTitleCase } from "../Utils/helper";
import { User } from "../Utils/Types";

const Resume = ({user}:{user:User}) => {
  return (
    <section
      id="resume"
      className="card card_header grid_item col-span-2 row-span-2 work"
    >
      <div>
        <h2>Resume</h2>
        <p>{`${user.resume.updateMonth} ${user.resume.updateYear}`}</p>
      </div>
      <div>
        <a
          href={user.resume.viewurl}
          target="_blank"
        >
          <img className="icon" src={view} alt="view" title="View Resume" />
        </a>
        <a
          href={user.resume.file}
          download={`Resume - ${toTitleCase(user.name)}`}
          target="_blank"
        >
          <img className="icon" src={download} alt="download" title="Download Resume" />
        </a>
      </div>
    </section>
  );
};

export default Resume;
