import { Personal } from '../Utils/Types';

const Profile = ({personal}:{personal:Personal}) => {
  const bios = personal.bio.split('\n');

  return (
    <section id="profile" className="card grid_item col-span-3 row-span-3 about">
      <div className="card_header">
        <img className="card_header-icon" src={personal.profileImg.url} alt="Photo" />
        <h2 className="card_header-title">{`${personal.fname+' '+personal.lname}`}</h2>
      </div>
      <div className="card_body">

        {bios.map((line,index)=><div key={index}>{line}</div>)}
      </div>
    </section>
  )
}

export default Profile