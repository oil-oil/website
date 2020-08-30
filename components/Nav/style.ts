import styled from "styled-components";

export const SHeaderWrapper = styled.div`
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 9999;
`

export const SHeader = styled.div`
  background: #fff;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.1s ease;

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export const SBrandWrapper = styled.div``

export const SBrand = styled.img`
  width: auto;
  max-height: 50px;
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
  line-height: 19px;
  font-size: 16px;
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
`