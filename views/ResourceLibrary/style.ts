import styled from "styled-components";

export const SContentAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absulute;
  justify-content: center;
`;

export const SNavbar = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #eaf2fa;
  text-align: center;
  align-items: center;

  div:nth-child(4) {
    position: relative;
    width: 10%;
    margin-left: 6%;
    justify-content: center;
  }
`;

export const SNavbarimg = styled.div`
  position: relative;
  width: 15.5%;
  margin-left: 7%;
  text-align: center;
  img {
    width: 136px;
    margin-top: 25px;
    margin-left: 20px;
  }
`;

export const SNavbarcenter = styled.div`
  position: relative;
  width: 44%;
  display: flex;
  flex-direction: row;
`;

export const SelectMenu = styled.div`
  color: #1d1b84;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 18%;
  text-align: left;
  justify-content: center;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
  margin-right: 50px;
  margin-left: 0;
  padding-left: 10px;
`;

export const SNavbarbutton = styled.div`
  position: relative;
  width: 10%;
  display: flex;
  flex-direction: row;
  margin-left: 3%;
`;

export const SNavbarstart = styled.div`
  position: absolute;
  top: 25px;
  right: 42px;
  width: 100px;
`;

export const SCardstyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
    position: absolute;
  }

  .timeContentBox {
    height: 90px;
    margin-left: 20%;
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

    .iconBox {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 72px;
      width: 72px;
      height: 72px;
      margin-right: 16px;
      position: relative;

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
  }

  .contentBox {
    padding: 18px 18px 18px 0;
    p {
      font-size: 13px;
      font-weight: 400;
      color: #344b80;
      font-family: Poppins, serif;
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
    padding: 32px 16px 24px;
    border-radius: 10px;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    position: relative;
    overflow: hidden;
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
    padding: 18px 20px;
  }

  .cardWrapper {
    position: relative;
    grid-column: 1/-1;
    background-color: #1a154e;
    border-radius: 10px;

    .box {
      margin: 0 auto;
      display: flex;
      padding: 40px 19px 32px;
      max-width: 350px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      input::-webkit-input-placeholder {
        color: #E0E0E0;
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

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SContent2 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0 auto;
  width: 100%;
  margin-top: 10%;

  img {
    position: absolute;
    right: 0;
  }
`

export const SiderLeft = styled.div`
  display: flex;
  flex: 1 1;
  min-width: 215px;
  flex-direction: column;
  margin-top: 20px;
  font-size: 17px;
  font-weight: 400;
  line-height: 28px;
  color: #344b80;
  a {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: 18px;
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

export const Siderright = styled.div`
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
    color: #8c4bff;
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
    margin-top: 15px;
  }
  p {
    color: #ffffff;
    font-size: 16px;
    margin: 15px 0;
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
`;

export const Sidertitle = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  h2 {
    color: #8c4bff;
    font-weight: 600;
    font-size: 16px;
  }
  h4 {
    margin-top: 10px;
  }
  a {
    color: #5e709d;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
    margin-right: 0;
    line-height: 1.4;
  }
`;

export const SFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 10px;
  height: 100px;
  margin-left: 5%;
  border-top: 2px solid #eaf2fa;
`;

export const SContentstart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 300px;
  h1 {
    font-size: 40px;
  }
  
  div {
    display: flex;
    flex-direction: row;
    margin-top: 50;
  }
`;
