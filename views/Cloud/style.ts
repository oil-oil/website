import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;

  .background {
    width: 100%;
    height: 400px;
    position: absolute;
    z-index: 1;
    background-image: url("/static/images/cloud_bg.png");

    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 1 !important;
      z-index: -1;
      background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.0001) 25%),
        radial-gradient(
          circle at top left,
          #2486b9 -60%,
          rgba(255, 255, 255, 0.0001) 25%
        ),
        radial-gradient(ellipse at top, #f0f7ff, #fff) 50% 0/5000px 100%
          no-repeat;
    }

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
      background-image: inherit;
      background-size: auto 100%;
      background-position: calc(50% + 17.5vw) 0;
      background-repeat: no-repeat;
    }
  }

  .titleBox {
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 80px;

    h1 {
      color: #2177b8;
      font-size: 42px;
      font-weight: 500;
      letter-spacing: 1px;
    }

    p {
      font-size: 18px;
      font-weight: 300;
    }

    div {
      width: 700px;
      text-align: left;
      margin: 0 auto;
      margin-top: 30px;
      font-size: 22px;
      font-weight: 400;
    }
  }
`;

export const SHero = styled.div`
  margin: 0 auto;
  padding: 30px 0 60px;
  position: relative;
  z-index: 2;
  background: radial-gradient(
    circle at bottom right,
    #93d5dc -50%,
    rgba(255, 255, 255, 0.0001) 25%
  );

  .descBox {
    margin: 0 auto;
    margin-top: 30px;

    p {
      font-size: 28px;
      text-align: center;
      font-weight: 400;
    }

    div {
      display: flex;
      padding: 30px 80px 10px;
      text-align: center;
      align-items: center;
      justify-content: center;

      button {
        margin-right: 20px;
      }
    }
  }

  .iconBox {
    display: flex;
    margin-right: 5px;
    margin: 0 auto;
    text-align: center;
    list-style: none;
    align-items: flex-start;
    margin-top: 30px;

    li {
      width: 20%;
      height: fit-content;
      margin: 40px 0px 20px;
      padding: 0 10px;
      border-right: 1px solid #0000000f;
    }

    li:last-child {
      border-right: none;
    }

    div {
      width: 100%;
      height: 100px;
      margin-top: 15px;
      svg {
        width: 40px;
        height: 40px;
        margin: 0 auto;
      }
      p {
        margin-top: 15px;
      }
    }
  }
`;

export const SContent = styled.div`
  padding: 30px 0 60px;
  background-color: #edf2f7;
  margin: 0 auto;
  word-break: break-all;

  .features {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    align-items: flex-start;
    text-align: center;
    padding: 15px 40px;
    margin-bottom: 25px;

    svg {
      width: 40px;
      height: 40px;
      display: flex;
      margin: 0 auto;
    }

    h3 {
      font-size: 24px;
      color: #126bae;
      font-weight: 400;
      line-height: 1.5;
      margin-top: 15px;
    }

    div {
      margin-top: 10px;
      padding: 0 20px;
      font-size: 16px;
      p {
        margin-bottom: 10px;
      }
      a {
        color: #126bae;
      }
    }
  }
`;

export const SContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .leftBox {
    width: 50%;
    margin: 80px 0;
    text-align: left;
    padding: 0 0 0 2%;

    h1 {
      color: #2177b8;
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      letter-spacing: 1px;
    }

    span {
      font-size: 18px;
      font-weight: 300;
    }

    p {
      font-size: 28px;
      font-weight: 400;
      margin: 20px 0 30px;
    }
  }
`;

export const SForm = styled.div`
  padding: 20px 0 80px;
  margin: 0 auto;
  background: linear-gradient(rgb(215 232 245 / 70%), #fbfefe);

  .formBox {
    width: 550px;
    margin: 0 auto;
    padding: 40px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
    background: #ffffff;
  }

  .verifyBox {
    display: flex;
    text-align: center;
    align-items: center;

    img {
      margin-left: 20px;
    }
  }

  .buttonBox {
    display: flex;
    margin-top: 20px;
  }
`;
