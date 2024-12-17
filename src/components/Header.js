import Logo from "../assets/images/Logo.svg"
import HamburgerMenu from '../assets/images/hamburger-menu-icon.svg'
import Nav from "./Nav"

const Header = () => {
  return (
    <header>
      {/* <div className="hamburguer-menu-icon"><img src={HamburgerMenu} alt=""  /></div> */}
      <img src={Logo} alt="" className="little-lemon-logo" />
      <Nav />
    </header>
  )
}

export default Header
