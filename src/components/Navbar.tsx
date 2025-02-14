import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../public/assets/avatar.svg';

import { NavbarContainer, NavbarTitle, TitleSpan } from '../styles/components/NavBar';
import { MarginCenter } from '../styles/general';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <img src={Avatar} alt="" />
        <NavbarTitle>
          <TitleSpan>In</TitleSpan>AI
        </NavbarTitle>
        <MarginCenter>
          <FontAwesomeIcon icon={faBars} />
        </MarginCenter>
      </NavbarContainer>
    </>
  )
};

export default Navbar;