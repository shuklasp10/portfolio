import { Data } from "../Utils/Types";

const Experience = ({ data }: { data: Data }) => {
  const experiences = data.experiences;
  return (
    <section
      id="experience"
      className="card grid_item col-span-3 row-span-3 work"
    >
      <h2>Experience</h2>
      <p>{`Total: ${data.totalExp}`}</p>
      {experiences.map((experience) => (
        <div className="card_body" key={experience.id}>
          <div>
            <h3>{experience.designation}</h3>
            <p>{experience.duration}</p>
          </div>
          <a target="_blank">
            <img
              src={experience.companyIcon.url}
              alt={experience.companyName}
              title={experience.companyName}
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default Experience;
