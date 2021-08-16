import styled from "styled-components";

export const SWrapper = styled.div`
  display: block;

  .cover {
    margin: 0 auto;
    width: 100%;
    font-family: Helvetica;
    background-color: #1e2969;

    .box {
      max-width: 1288px;
      margin: 0 auto;
      text-align: center;
      padding: 80px 12px;
    }

    h1 {
      max-width: 732px;
      margin: 0 auto;
      color: #fff;
      font-size: 48px;
      font-weight: 400;

      @media (max-width: 1000px) {
        font-size: 36px;
      }

      @media (max-width: 460px) {
        font-size: 32px;
      }
    }
  }

  .boxdesc {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1124px;
    padding: 80px 12px 40px;
    margin: 0 auto;

    @media (max-width: 600px) {
      padding: 50px 12px 20px;
    }

    h2 {
      font-size: 26px;
      color: #172d72;
      margin-bottom: 50px;
      text-align: center;

      @media (max-width: 600px) {
        margin-bottom: 30px;
      }
    }

    a {
      transition: color 0.15s ease-in;
    }

    button {
      width: 220px;
      height: 60px;
      background: #3351ff;
      padding: 18px;
      color: #fff;
      font-size: 16px;
      border: none;
      border-radius: 30px;
      margin: 70px 0 40px;
      position: relative;
      box-shadow: 0 0 8px #487ecb;
      outline: none;
      :hover {
        background: #172d72;
        box-shadow: none;
      }

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: left 0.5s ease;
      }

      @media (max-width: 600px) {
        width: 160px;
        height: 50px;
        margin: 30px 0 20px;
      }
    }

    .detial {
      color: #3e3e3e;
      background: #fafafa;
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 100%;
      min-height: 500px;
      margin: 60px auto -40px;

      @media (max-width: 900px) {
        margin-top: 20px;
        padding-bottom: 20px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 50%;
        margin-top: 60px;
      }

      h3 {
        font-size: 20px;
        margin: 8px 0;
        color: #202884;
      }

      p {
        text-align: center;
        max-width: 210px;
        margin: 2px auto;
        font-weight: 400;
        display: none;
      }

      .imgbox {
        margin: 0 auto 20px;
        width: 100%;

        img {
          height: 100px;
          vertical-align: middle;
        }
      }

      @media (max-width: 900px) {
        h3 {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }

  .desc {
    max-width: 1124px;
    font: 16px;
    line-height: 1.7;
    margin: 0 auto;

    p {
      padding: 0 15px;
      margin-bottom: 20px;
    }
  }

  .container {
    background-color: #fafafa;
    padding: 80px 12px;
    min-height: 512px;
    max-width: 1124px;
    margin: 0 auto;

    h2 {
      font-size: 26px;
      color: #172d72;
      margin-bottom: 50px;
      text-align: center;
    }
  }

  .timeline {
    div {
      font-size: 16px;
      font-weight: 600;
      text-align: left;
      color: #3355ff;
    }

    p {
      font-size: 15px;
      color: #3e3e3e;
    }
  }

  .info {
    display: flex;
    width: 100%;
    padding: 60px 0;
    align-items: center;
    font-size: 16px;
    line-height: 1.7;
    font-weight: 600;
    color: #3e3e3e;
    position: relative;
    justify-content: space-around;

    .col1 {
      width: 55%;
      text-align: left;
      position: relative;
      padding: 0 0 20px 0;

      ::after {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        padding: 130px 0;
        background: #bfbfbf;
        margin: -90px 0 0 125px;
        height: 15%;

        @media (max-width: 480px) {
          display: none;
        }
      }

      span {
        font-weight: 300;
      }
    }

    .col2 {
      text-align: left;
      line-height: 1.7;
      height: 100%;
      position: relative;

      div {
        margin-bottom: 16px;
        position: relative;
        padding: 0 40 0 0;
      }

      p {
        font-weight: 600;
        margin: 0;
        &:nth-child(2) {
          font-weight: 400;
        }
      }

      a {
        text-decoration: none;
      }

      span:hover {
        color: #fe0000;
      }

      .tip {
        color: #fe0000;
      }
    }

    @media (max-width: 480px) {
      display: block;
      padding: 0 0 20px 0;

      .col1 {
        text-align: center;
        width: 100%;
      }

      .col2 {
        text-align: center;
      }
    }
  }
`;
