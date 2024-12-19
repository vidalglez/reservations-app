import Logo from "../assets/images/Logo.svg"
import Nav from "./Nav"

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" className="little-lemon-logo" />
      <Nav />
    </header>
  )
}

export default Header
