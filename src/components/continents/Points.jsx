import bee from '../../assets/game/user_bee.png'
import honey from '../../assets/game/hony.png'

const Points = () => {

  return (
    <article className="points">
      <img className="points__image" src={bee} alt="bee" />
      <div className="points__body">
        <p className="points__body-name">DrBeeBeep</p>
        <div className="points__body-points">
          <img className="points__body-image" src={honey} alt="honey" />
          999,999
        </div>
      </div>
    </article>
  )
}

export default Points