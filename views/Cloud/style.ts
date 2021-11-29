import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;

  .titleBox {
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 80px;

    h1 {
      font-size: 42px;
      font-weight: 500;
      letter-spacing: 1px;
    }

    p {
      font-size: 18px;
      font-weight: 300;
    }

    div {
      width: 900px;
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
  background-color: #f7fafc;

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
    padding: 0 10%;
  }

  .card {
    width: 33.33%;
    align-items: flex-start;
    padding: 15px;
    margin-bottom: 25px;
  }
`;

export const SForm = styled.div`
  background-color: #FFF;
  padding: 30px 0 60px;
  margin: 0 auto;

  .formBox {
    width: 700px;
    height: 600px;
    margin: 0 auto;
    background-color: #F3F3F3;
  }
`

export const SContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
