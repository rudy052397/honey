import { Link } from "react-router-dom"
import iconMenu from "../../../assets/game/icon_menu.png"
import iconMenu2 from "../../../assets/game/icon_menu2.png"

const items = [
  { name: "CONTINENTS", path: "/", icon: iconMenu },
  { name: "INVENTORY", path: "/", icon: iconMenu2 },
  { name: "MARKET", path: "/", icon: iconMenu2 },
  { name: "EXCHANGE", path: "/", icon: iconMenu2 },
]
const Menu = ({ menuOpen, setMenuOpen }) => {

  return (
    <>
      <ul className={`menu ${menuOpen == true ? 'menu--open' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>
            <Link className="menu__item" to={item.path} >
              <img className="menu__item-icon" src={item.icon} alt="log" height="80px" width="80px" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </>
  )
}

export default Menu