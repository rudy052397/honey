const GardenCard = ({ name, image, color }) => {

  return (
    <div className="card">
      <div className="card__body">
        <img className="card__body-image" src={image} alt={name} />
        <p className="card__body-name"><span>G</span>ARDEN <span>{name}</span></p>
        <div className="card__body-point" style={{ backgroundColor: color }}></div>
      </div>
      <div className="card__footer">
        <div className="card__footer-btn">ENTER</div>
      </div>
    </div>
  )
}

export default GardenCard