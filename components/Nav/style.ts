import styled from "styled-components";

export const SHeaderWrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 9999;

  @media (min-width: 1200px) {
    height: 75px;
  }
`

export const SHeader = styled.div`
  background: #fff;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.1s ease;
  width: 100%;
  height: 180px;

  @media (min-width: 1200px) {
    width: 1170px;
    height: 50px;
  }
`

export const SBrandWrapper = styled.div``

export const SBrand = styled.img`
  width: auto;
  max-height: 140px;

  @media (min-width: 1200px) {
    max-height: 50px;
  }
`

export const SNavWrapper = styled.div``

export const SNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
`

export const SNavItem = styled.li`
  font-weight: 600;
  line-height: 33px;
  font-size: 33px;
  a {
    text-decoration: none;
    border-radius: 3px;
    text-transform: uppercase;
    padding: 15px;
    color: #555;
    &:hover {
      color: ${props => props.theme.color.primary};
    }
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 19px;
  }
`

export const SHover = styled.div`
  div.dropdown.nav-item:hover {
    div.dropdown-menu {
      display: block;
    }
  }
`
