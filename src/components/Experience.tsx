import { User } from "../Utils/Types"
import { toTitleCase } from "../Utils/helper"

const Experience = ({ user }: { user: User }) => {
    return (
        <section id="experience" className="card grid_item col-span-3 row-span-3 work">
            <h2>Experience</h2>
            <p>{`Total: ${user.experience.total} Years`}</p>
            {user.experience.companies.map((company) => (
                <div className="card_body">
                    <div>
                        <h3>{toTitleCase(company.position)}</h3>
                        <p>{`${company.startMonth} ${company.startYear} - ${company.endMonth ? (company.endMonth + ' ' + company.endYear) : 'Present'}`}</p>
                    </div>
                    <a href={company.link} target="_blank">
                        <img src={company.icon} alt={company.name} title={toTitleCase(company.name)} />
                    </a>
                </div>
            ))}
        </section>
    )
}

export default Experience