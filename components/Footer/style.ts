import styled from "styled-components";

export const SWrapper = styled.footer`
  display: flex;
  justify-content: center;
`

export const SContainer = styled.div`
  display: flex;
  padding: 25px 0;
  justify-content: space-between;

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export const STextWrapper = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #3c4858;
  width: min(550px, 100vw);
  div {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    a {
      color: ${props => props.theme.color.primary};
    }
  }
`

export const SIconList = styled.ul`
  margin: 0;
  padding: 0;
`
export const SIcon = styled.a`
  margin-right: 24px;
`