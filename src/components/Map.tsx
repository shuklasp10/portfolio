import { Data } from "../Utils/Types"

const Map = ({ data }: { data: Data }) => {
  return (
    <a id="map" className="card col-span-2 row-span-3 about" href={data.addressLink} target="_blank">
      <img src={data.addressImg.url} alt="Gurugram" title={data.address} />
    </a>
  )
}

export default Map