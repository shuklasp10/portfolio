import { User } from "../Utils/Types"

const Map = ({ user }: { user: User }) => {
  return (
    <a id="map" className="card col-span-2 row-span-3 about" href={user.map.url} target="_blank">
      <img src={user.map.image} alt="Gurugram" title={user.map.address} />
    </a>
  )
}

export default Map