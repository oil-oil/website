import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  font-family: Roboto;
  padding: 50px 0;

  @media (max-width: 600px) {
    padding: 15px 0;
  }
`

export const SBox = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 600px) {
    .iframe {
      display: none;
    }
  }
`
