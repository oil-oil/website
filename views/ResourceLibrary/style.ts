import styled from "styled-components";

export const SContentAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absulute;
  justify-content: center;
`;

export const SCardstyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  .timeLineBox {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  .linePoint {
    background-color: #c8cee1;
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
  .timeLine {
    background-color: #c8cee1;
    width: 2px;
    height: 65px;
    margin: 6px 0 3px 4px;
  }

  .timeLineContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10%;
  }

  .timeContentBox {
    height: 90px;
    margin-left: 15%;
    display: flex;
    align-items: center;
    p {
      line-height: 19px;
      font-family: Poppins, serif;
      font-weight: 400;
      color: #344b80;
    }
    span {
      font-size: 17px;
      line-height: 22px;
      font-weight: 600;
      color: #1d1b84;
    }
  }
`;

export const SResourcesCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    .imgBox {
      display: none;
    }
  }
`;

export const SLinkBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  .box {
    display: flex;
    box-sizing: border-box;
    text-align: left;
    width: 100%;
    text-decoration: none;
    border-radius: 10px;
    :hover {
      .iconBox {
        transform: perspective(100px) scale(1.06, 1.06);
      }
    }

    .iconBox {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 72px;
      width: 72px;
      height: 72px;
      margin-right: 16px;
      position: relative;
      transition: all 0.3s;
      transform: perspective(100px);

      div {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background-color: #f6fafe;
        border: 1px solid #eaf2fa;
        border-radius: 10px;
        z-index: -1;
      }
    }

    .content {
      flex: 1 1;
      padding-top: 4px;

      p {
        font-size: 13px;
        margin-top: 4px;
      }
    }
  }
`;

export const SCommunityBox = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 23px;
  grid-template-columns: 1fr 1fr;
  margin: 34px 0 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .communityList {
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;
    border: 10px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    :hover {
      .background {
        transform: perspective(100px) scale(1.06, 1.06);
      }
    }
  }
  .iconBox {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 72px;
    width: 72px;
    height: 72px;
    position: relative;
    background-color: #f6fafe;
    border-radius: 15px;
    margin-right: 10px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: #f6fafe;
    border: 1px solid #eaf2fa;
    border-radius: 10px;
    z-index: -1;
    transition: all 0.3s;
    transform: perspective(100px);
  }

  .contentBox {
    padding: 18px 18px 18px 0;
    p {
      font-size: 13px;
      font-weight: 400;
      color: #344b80;
      line-height: 19px;
    }
  }
`;

export const SLearnAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 23px;

  .cardBox {
    display: flex;
    padding: 32px 50px 24px;
    border-radius: 10px;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    position: relative;
    overflow: hidden;

    @media (max-width: 420px) {
      padding: 32px 16px 24px;
    }
  }
  .cardBox::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
  .cardBox:first-child::after {
    background-image: url("https://static.apiseven.com/202108/socials-grid-background-purple.svg");
  }
  .cardBox:nth-child(2)::after {
    background-image: url("https://static.apiseven.com/202108/socials-grid-background-green.svg");
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 72px;
    width: 72px;
    height: 72px;
    margin: 0 auto 24px;
    position: relative;
    border-radius: 100%;
  }

  .button {
    width: 100%;
    color: #ffffff;
    border-radius: 8px;
    z-index: 1;
    transition: all 0.3s;
    transform: perspective(100px);
    :hover {
      transform: perspective(100px) scale(1.06, 1.06);
    }
    .background {
      width: 100%;
      padding: 18px 20px;
    }
  }

  .cardWrapper {
    position: relative;
    grid-column: 1/-1;
    background-color: #1a154e;
    border-radius: 10px;

    .box {
      position: relative;
      z-index: 3;
      margin: 0 auto;
      display: flex;
      padding: 40px 19px 32px;
      max-width: 350px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      input::-webkit-input-placeholder {
        color: #e0e0e0;
      }

      h1 {
        font-size: 22px;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 1rem;
        color: #ffffff;
      }

      p {
        font-size: 15px;
        line-height: 22px;
        margin-bottom: 1rem;
        color: #ffffff;
      }
      span {
        font-size: 13px;
        line-height: 1.57;
        font-weight: 400;
        color: #f6fafe;
        margin-top: 1.5rem;
      }
    }

    .iconBox {
      position: absolute;
      top: -37px;
      right: 80px;
      left: auto;
      transform: scale(1);
      z-index: 5;
    }

    @media (max-width: 900px) {
      .iconBox {
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 1;
        transform: translateX(-50%) scale(0.4);
      }

      .box {
        margin-top: 40px;
      }
    }
  }

  .cardWrapper::before {
    content: "";
    left: 0;
    background-image: url("https://static.apiseven.com/202108/newsletter-left-pattern.svg");
    background-position: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;
  }
  .cardWrapper::after {
    content: "";
    right: 0;
    background-image: url("https://static.apiseven.com/202108/newsletter-right-pattern.svg");
    background-position: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0 auto;
  width: 83.333%;
  margin-bottom: 20px;
  border: white;
  align-items: flex-start;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SSiderLeft = styled.div`
  display: flex;
  flex: 1 1;
  min-width: 215px;
  flex-direction: column;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  color: #344b80;
  position: sticky;
  top: -416px;
  margin-bottom: 34px;
  h2 {
    margin: 15px 0;
  }
  a {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 13px;
    margin-right: 50px;
  }
  span {
    margin-left: 12px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SContentitem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 4%;
  margin-bottom: 64px;

  @media (max-width: 800px) {
    margin-right: 5%;
  }
`;

export const SSiderright = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  position: relative;
  margin-left: 1%;
`;

export const STitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;
  margin-bottom: 64px;

  div:nth-child(2) {
    font-size: 30px;
    position: relative;
    margin-bottom: 35px;
    font-weight: 700;
    transform: translateZ(1000px);
    color: #1d1b84;
  }
  div:nth-child(3) {
    font-size: 15px;
    font-weight: 400;
    color: #344b80;
  }
  span {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 35px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #3182ce;
  }

  h2 {
    font-size: 43px;
    position: relative;
    margin-bottom: 35px;
    font-weight: 700;
    line-height: 1.19;
    transform: translateZ(1000px);
    color: #1d1b84;
  }

  p {
    font-size: 17px;
    color: #344b80;
    font-weight: 400;
    line-height: 28px;
  }
`;

export const SContentcard = styled.div`
  display: flex;
  flex-direction: column;
  top: 70px;
  margin-right: 15px;
  border-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
  text-align: left;
  width: 100%;

  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 24px;
  }
  p {
    color: #ffffff;
    font-size: 16px;
    margin: 24px 0;
  }
  div {
    border-radius: 40px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 35px;
    height: 35px;
    opacity: 1;
    visibility: inherit;
  }
  a {
    width: 100%;
    display: contents;
  }
`;

export const SSidertitle = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  font-size: 15px;
  h2 {
    color: #3182ce;
    font-weight: 600;
  }
  h4 {
    margin-top: 10px;
  }
  a {
    color: #5e709d;
    font-weight: 400;
    margin-bottom: 0;
    margin-right: 0;
    line-height: 1.4;
  }
`;
