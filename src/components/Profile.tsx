import { toTitleCase } from '../Utils/helper';
import { User } from '../Utils/Types';

const Profile = ({user}:{user:User}) => {
  
  return (
    <section id="profile" className="card grid_item col-span-3 row-span-3 about">
      <div className="card_header">
        <img className="card_header-icon" src={user.photo} alt="Photo" />
        <h2 className="card_header-title">{`${toTitleCase(user.name)}`}</h2>
      </div>
      <div className="card_body">
        {user.headline.map((line,index)=><div key={index}>{line}</div>)}
      </div>
    </section>
  )
}

export default Profile