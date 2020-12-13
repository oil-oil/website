import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;
  display: block;

  .cover {
    width: 1228px;
    min-height: 275px;
    left: 0px;
    background-color: #f4f4ff;
    position: relative;
    width: 100%;
    display: block;
  }

  .background {
    border-radius: 0 0 0 0;
    background-image: url(https://static.apiseven.com/2020/05/6f70f414-04dc-4995-ba69-fbae7a8e821d-contact.jpg);
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }

  .box {
    max-width: 1170px;
    padding: 40px 25px;
    margin: 0 auto;

    h1 {
      font-family: "Merriweather", sans-serif;
      font-size: 28px;
      line-height: 2.3em;
      color: #fff;
      position: relative;
      margin: 40px 1.6%;
      padding: 0 5%;

      @media (max-width: 1200px) {
        padding: 0;
      }
    }
  }

  .slogan {
    max-width: 650px;
    padding: 0 25px;
    margin: 5% auto -5%;

    @media (max-width: 700px) {
      width: 70%;
    }

    p {
      font-family: "Merriweather", sans-serif;
      font-size: 18px;
      line-height: 1.8;
      text-align: center;
      color: #142848;
    }
  }

  .cards {
    min-height: 250px;
    padding: 0 50px;
    border: 1px solid transparent;
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    margin: 10% auto 5%;
    text-align: center;
    justify-content: space-between;
    background-color: #fff;

    @media (min-width: 1200px) {
      width: 1170px;
    }

    @media (max-width: 900px) {
      justify-content: center;
      padding: 0 25px;
    }
  }

  .card {
    width: 30%;
    max-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 20px -2px;
    background-color: #fff;
    margin: 20px 1.6%;
    text-align: center;
    opacity: 0.8;

    @media (max-width: 900px) {
      width: 100%;
    }

    @media (max-width: 700px) {
      padding: 0;
      max-width: 650px;
    }

    img {
      width: 100%;
      height: 120px;
      object-fit: cover;
    }

    a {
      padding: 15px;
      border-top: 1px solid #f5f7f8;
      background-color: #fff;
      text-decoration: none;
    }

    h2 {
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      margin: 0 auto;
      padding: 0;
      text-align: left;
      color: #142848;

      :hover {
        color: #ff2500;
        text-decoration: none;
      }
    }
  }
`;
