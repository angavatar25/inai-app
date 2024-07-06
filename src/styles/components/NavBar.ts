import styled from "styled-components"

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 25px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`
export const NavbarTitle = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #000;
`
export const TitleSpan = styled.span`
  color: #4f46e5;
`

export const NavbarDesktopContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  min-height: 100vh;
  padding: 30px;
  background-color: #fff;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  flex-shrink: 0;
  box-shadow: 5px 20px 10px 2px #1717170F;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

`