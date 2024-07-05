import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../public/assets/avatar.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Navbar = () => {
  const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 25px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  `
  const MarginCenter = styled.div`
    margin: auto 0;
  `
  const Title = styled.p`
    font-size: 20px;
    font-weight: 800;
  `
  const TitleSpan = styled.span`
    color: #4f46e5;
  `
  return (
    <>
      <NavbarContainer>
        <img src={Avatar} alt="" />
        <Title><TitleSpan>In</TitleSpan>AI</Title>
        <MarginCenter>
          <FontAwesomeIcon icon={faBars} />
        </MarginCenter>
      </NavbarContainer>
    </>
  )
};

export default Navbar;