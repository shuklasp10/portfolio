import { User } from '../Utils/Types'

const Carousel = ({user}:{user:User}) => {
    
    return (
        <section id="stack" className="card grid_item col-span-3 row-span-1 work">
            <div className="slide_wrapper">
                <div className="slide_track">
                    {user.skills.map((skill)=>(
                        <img className='icon slide_item' src={skill.icon} alt={skill.name} title={skill.name} key={skill._id}/>
                    ))}
                </div>
                <div className="slide_track">
                    {user.skills.map((skill)=>(
                        <img className='icon slide_item' src={skill.icon} alt={skill.name} title={skill.name} key={skill._id}/>
                    ))}
                </div>
            </div>
        </section>  
    )
}

export default Carousel