import styled from "styled-components";

export const SSection1 = styled.div`
  width: 1228px;
  left: 0px;
  background-color: #f4f4ff;
  transition-property: background-image, border, border-radius, box-shadow;
  transition-duration: .3s, 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;
  position: relative;
  width: 100%;
  display: block;
`;

export const SBackground = styled.div`
  border-radius: 0 0 0 0;
  background-image: url(https://static.apiseven.com/2020/07/Course-BG.png);
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .05;
  transition-property: background-image, border, border-radius, box-shadow;
  transition-duration: .3s, 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;

export const SBox1 = styled.div`
  min-height: 275px;
  display: -webkit-box;
  -webkit-box-align: center;
  align-items: center;
`;

export const SInner = styled.div`
  width: 100%;
  display: -webkit-box;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start; 
  padding-left: 15%;

  @media (max-width: 720px) {
    padding-left: 10%;
  }

  @media (max-width: 420px) {
    padding-left: 5%;
  }

  h1 {
    width: 100%;
    text-align: left;
    color: #000;
    font-family: "Monserrat", sans-serif;
    font-size: 60px;
    font-weight: 300;
    margin: 0;
    line-height: 1;
  }

  span {
    width: 100%;
    color: #000;
    font-family: "Monserrat", sans-serif;
    line-height: 1;
    margin: 0;
    padding-top: 2%;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 40px;
    }

    span {
      padding-top: 5%;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 30px;
      line-height: 1.4em;
    }

    span {
      font-size: 14px;
      line-height: 1.4em;
    }
  }
`;

export const SSection2 = styled.div`
  background-color: rgba(255,255,255,.9098039215686274);
  transition-property: background-image, border, border-radius, box-shadow;
  transition-duration: .3s, 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;
  margin-top: 0%;
  margin-bottom: 0%;
  padding: 2% 0 0 5%;
  position: relative;
  background-color: transparent;

  @media (max-width: 1024px) {
    padding: 2% 5% 5% 5%;
  }

  @media (max-width: 720px) {
    padding: 2% 5% 0 0;
  }
`;

export const SBox2 = styled.div`
  padding: 0 0 0 10%;
  max-width: 1400px;
  min-height: 591px;

  @media (max-width: 420px) {
    padding: 0 0 0 5%;
  }
`;

export const SArticle = styled.article`
  width: 100%;
  font-size: 16px;
  font-family: initial;
  font-weight: 300;
  line-height: 1.618;
  -webkit-font-smoothing: antialiased;

  h3 {
    display: flex;
    margin: 0 0 30px;
    font-weight: 300;
  }

  ol {
    margin-top: 0;
    margin-bottom: 30px;
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
  }

  p a {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none;
    color: #ff2500;

    :hover {
      text-decoration: none;
      opacity: .75;
    }
  }

  @media (max-width: 420px) {
    ol {
      padding-inline-start: 30px;
    }
  }
`;
