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

  .container {
    max-width: 1288px;
    padding: 55px 12px;
    margin: 0 auto;

    @media (min-width: 1300px) {
      width: 1588px;
    }
  }

  .listItem {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #cdcdcd;
    align-items: center;
    padding: 3rem 12px;
  }

  .logo {
    flex-basis: 20%;
    padding: 0 15px;
    text-align: center;

    img {
      width: 135px;
    }
  }

  .textTitle {
    flex-basis: 80%;
    padding: 0 15px;

    span {
      font-size: 16px;
    }

    a {
      text-decoration: none;
    }

    h2 {
      margin-top: 10px;
      line-height: 1.7;
      font-size: 22px;
      color: #3351ff;

      :hover {
        color: #202884;
      }

      @media (max-width: 1388px) {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 460px) {
    .listItem {
      display: inline-table;
      padding: 15px 0;
    }

    img {
      width: 100% !important;
    }

    .textTitle {
      margin-top: 10px;
    }
  }
`;
