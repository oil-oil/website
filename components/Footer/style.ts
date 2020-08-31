import styled from "styled-components";

export const SWrapper = styled.footer`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 25px;
`

export const SContainer = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1200px) {
    width: 1170px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`

export const STextWrapper = styled.div`
  font-size: 30px;
  font-weight: 300;
  color: #3c4858;
  width: 100%;
  div {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    a {
      color: ${props => props.theme.color.primary};
    }
  }

  @media (min-width: 1200px) {
    font-size: 14px;
    max-width: 550px;
  }
`

export const SIconList = styled.ul`
  margin: 35px 0 0;
  padding: 0;
  text-align: center;

  @media (min-width: 1200px) {
    margin: 0;
  }
`

export const SIcon = styled.a`
  margin-right: 44px;
  font-size: 44px;

  @media (min-width: 1200px) {
    margin-right: 24px;
    font-size: 21px;
  }
`
