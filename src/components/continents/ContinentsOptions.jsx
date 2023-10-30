import garden1 from '../../assets/game/garden01.jpg'
import garden2 from '../../assets/game/garden02.jpg'
import garden3 from '../../assets/game/garden04.jpg'
import garden4 from '../../assets/game/garden05.jpg'
import GardenCard from './GardenCard'
const _gardens = [{ image: garden1, color: "#fc4445" }, { image: garden2, color: "#01a5f1" }, { image: garden3, color: "#00b064" }, { image: garden1, color: "#fc4445" }, { image: garden4, color: "#fda506" }]
const gardens = [..._gardens, ..._gardens, ..._gardens, ..._gardens]


const ContinentsOptions = () => {

  return (
    <article className="garden">
      {gardens.map((garden, index) => (
        <GardenCard
          key={index}
          name={index < 9 ? '0' + (index + 1) : index + 1}
          image={garden.image}
          color={garden.color}
        />
      ))}

    </article>
  )
}

export default ContinentsOptions