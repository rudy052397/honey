import { Link } from "react-router-dom"
import Menu from "./Menu"
import iconMenu from "../../../assets/game/icon_menu.png"
import iconMenu2 from "../../../assets/game/icon_menu2.png"
// import iconMenuHamburger from "../../../assets/game/icon_options.png"
import { useEffect, useState } from "react"
import useMediaQuery from "../../../hooks/useMediaQuery"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mediaQuery = useMediaQuery('(min-width:768px)')

  useEffect(() => {
    setMenuOpen(false)
  }, [mediaQuery]);
  
  return (
    <header className="header">
      <nav className="nav">
        <div className="container container--header">

          <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <div className="menu__secondary">
            <Link>
              <img src={iconMenu} alt="back" height="85px" width="85px" />
            </Link>
            {!mediaQuery &&
              <div className={`menu__icon ${menuOpen == true ? "menu__icon--open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} >
                <div className="menu__icon-line">
                </div>
                <div className="menu__icon-line">
                </div>
                <div className="menu__icon-line">
                </div>
              </div>
            }
            <Link>
              <img src={iconMenu2} alt="invert" height="85px" width="85px" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header