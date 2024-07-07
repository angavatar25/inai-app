import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Avatar from '../public/assets/avatar.svg';

import { NavbarDesktopContainer, NavbarTitle, TitleSpan } from "../styles/components/NavBar";

const NavbarDesktop = () => {
  return (
    <NavbarDesktopContainer>
      <div>
        <img src={Avatar} alt="" />
        <NavbarTitle>
          <TitleSpan>In</TitleSpan>AI
        </NavbarTitle>
      </div>
      <FontAwesomeIcon icon={faBars} style={{ color: '#000' }} />
    </NavbarDesktopContainer>
  )
}

export default NavbarDesktop;