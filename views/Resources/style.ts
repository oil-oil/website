import styled from "styled-components";

export const SWrapper = styled.div`
  display: block;
  
  .cover {
    margin: 0 auto;
    width: 100%;
    padding: 160px 0 120px;
    font-family: Helvetica;
    background-image: url("https://static.apiseven.com/202102/312635047.jpeg");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    position: relative;

    @media (max-width: 1600px) {
      background-size: 150%;
    }

    @media (max-width: 1050px) {
      background-size: 200%;
    }

    @media (max-width: 750px) {
      background-size: 220%;
    }
    
    .box {
      max-width: 1288px;
      margin: 0 auto;
      text-align: center;
      padding: 0 15px;

      p {
        color: #fff;
        font-weight: 300;
        font-size: 24px;
        line-height: 30px;
        padding: 15px 0;
      }
    }

    h1 {
      margin: 0 auto;
      padding: 0 20px;
      color: #fff;
      font-size: 60px;
      font-weight: 700;
      line-height: 65px;

      @media (max-width: 1000px) {
        font-size: 36px;
      }

      @media (max-width: 460px) {
        font-size: 32px;
      }
    }
  }

  .container {
    max-width: 1170px;
    padding: 55px 12px 28px;
    margin: 0 auto;

    h2 {
      font-weight: 300;
      color: #333;
      font-size: 38px;
      line-height: 48px;
      margin: 0;
      padding: 10px 0;
      margin-bottom: 8px;
      border-top: 1px solid #e9e9ed;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: block;
    }

    li {
      border-bottom: 1px solid #e9e9ed;
      padding: 20px 30px 20px 0;
      clear: both;
      display: block;
      overflow: hidden;
    }

    .left {
      float: left;
      max-width: 80%;

      p,.title {
        margin-bottom: 0;
        font-weight: 300;
        line-height: 1.78;
        color: #4a4a4a;
        font-size: 18px;
        font-family: MarkOT,sans-serif;
        word-wrap: break-word;
        text-decoration: none;
      }
    }

    .title:hover {
      color: #007bff;
    }

    .speaker {
      color: #a7a7a8 !important; 
    }

    .showButton {
      background-image: url(https://cdn.confluent.io/wp-content/themes/confluent/assets/images/kafka_sumit_des.png);
      background-size: 12px;
      border: none;
      height: 12px;
      width: 12px;
      margin-left: 27px;
      display: inline-block;
      text-indent: -999999px;
      cursor: pointer;
      margin-top: 8px;
      transition: none;
    }

    .right {
      float: right;
      max-width: 20%;

      a {
        text-decoration: none;
        outline: 0;
        :hover {
          color: #007bff;
        }
      }
    }

    .contentBox {
      max-height: 0;
      padding: 0;
      transition-property: all;
      transition-duration: 0.5s;
      transition-timing-function: ease-out;
      transition-delay: 0s;
      margin-top: 0;
      color: #4A4A4A;
      font-weight: 300;
      font-size: 18px;
      line-height: 1.78;
      overflow: auto;
      float: left;
      clear: both;
      background-color: #f1f1f1;

      p {
        margin-bottom: 0;
        line-height: 1.78;
        color: #4a4a4a;
        font-size: 16px;
        font-family: MarkOT, sans-serif;
        word-wrap: break-word;
      }
    }

    .active .showButton {
      background-position: 0 12px !important;
    }

    .active + .contentBox {
      max-height: 200px !important;
    }

    .content {
      padding: 15px;
    }
  }

  @media (max-width: 460px) {
    .container {
      padding: 28px 12px;
      box-sizing: border-box;

      h2 {
        font-size: 26px;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      li {
        padding: 20px 0;
      }
    }

    .cover {
      background-size: auto;
    }

    .title, .speaker {
      font-size: 16px !important;
    }

    .left {
      max-width: 70%;
    }

    .showButton {
      margin-left: 10px !important;
    }

    .right {
      width: 30%;
      font-size: 14px;
      padding-left: 10px;
    }
  }
`;
