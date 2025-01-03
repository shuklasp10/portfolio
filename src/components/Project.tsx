import { ProjectType } from "../Utils/Types"
import { toTitleCase } from "../Utils/helper"

const Project = ({project}:{project: ProjectType}) => {
  return (
    <section id="project" className="card grid_item col-span-3 row-span-3 work">
            <a href={project.previewLink} target="_blank">
                <img src={project.image} alt={project.name} title={project.name} />
            </a>
            <h2 className="card_body">{toTitleCase(project.name)}</h2>
        </section>
  )
}

export default Project