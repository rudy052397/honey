import btnLeft1 from '../../assets/game/back.png'
import btnRight from '../../assets/game/icon_options.png'

const ButtonsOptions = () => {

  return (
    <>
      <img className='options__btn-left-1' src={btnLeft1} alt="btn_left1" />
      <div className='options__btn-left-2'>GREENHOUSE</div>
      <div className='options__btn-right'>
        TYPE
        <img src={btnRight} alt="heart" />
      </div>
    </>
  )
}

export default ButtonsOptions