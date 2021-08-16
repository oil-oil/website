import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  font-family: Roboto;

  h2 {
    font-size: 28px;
    font-weight: 500;
    color: #3E464C;
  }
`

export const SSection = styled.section`
  width: 100%;
  height: 350px;
  font-family: inherit;

  @media (max-width: 420px) {
    height: 300px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: -1;
    background: url("https://static.apiseven.com/202108/20210706002.jpeg") no-repeat center center / 100%;
  }

  .titleBox {
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 100px 0;

    h1 {
      font-size: 36px;
      font-weight: 600;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    p {
      width: 100%;
      font-size: 22px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  @media (max-width: 850px) {
    .titleBox {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 780px) {
    .titleBox {
      padding: 80px 20px 0;

      h1 {
        font-size: 26px;
      }

      p {
        width: 100%;
        font-size: 18px;
      }
    }
  }
`

export const SMenu = styled.div`
  position: absolute;
  width: 100%;
  top: 340px;

  @media (max-width: 1000px) {
    top: 325px;
  }

  @media (max-width: 780px) {
    top: 327px;
  }

  ul {
    width: 50%;
    display: flex;
    margin: 0 auto;
    list-style: none;
    align-items: flex-start;
  }

  li {
    padding: 2.5px;
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 400;
    width: 20%;

    a {
      width: 100%;
    }
  }

  .selected {
    border-bottom: 2px solid #2474b5;
    a {
      color: #2474b5 !important;
    }
  }

  a:hover {
    text-decoration: none;
  }

  .newmenu {
    padding: 0 380px;
    top: 0;
    width: 100%;
    height: 50px;
    position: fixed;
    align-items: center;
    z-index: 10;
    background-color: #FFFFFF;
    box-shadow: 0 1px 1px rgb(0 0 0 / 15%);

    li {
      color: #455D82;
    }
  }

  @media (max-width: 1350px) {
    .newmenu {
      padding: 0 250px;
    }
  }

  @media (max-width: 1180px) {
    ul {
      width: 75%;
    }

    .newmenu {
      padding: 0 100px;
    }
  }

  @media (max-width: 780px) {
    ul {
      width: 100%;
      padding: 0 0 10px;
    }
    ul, li {
      font-size: 14px;
    }

    .newmenu {
      display: flex;
      padding: 10px;
    }
  }
  
  @media (max-width: 520px) {
    ul {
      display: none;
    }

    .newmenu {
      justify-content: space-evenly;

      li {
        width: auto;
      }
    }
  }
`

export const SShowBox = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 40px;

  @media (max-width: 780px) {
    padding-top: 20px;
    padding: 20px 0 0;
  }
  
  h3 {
    font-size: 24px;
    color: #455D82;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .sectionBox {
    width: 100%;
    padding: 20px 0;

    h2 {
      padding-left: 60px;
      padding-top: 70px;
      margin-top: -70px;
    }
  }

  .itemBox {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-left: 60px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd57;
  }

  .sectionBox:last-child {
    .itemBox {
      border-bottom: none;
    }
  }

  .itemBoxList {
    width: 33%;
    color: #68747F;
    padding-right: 30px;
    margin-top: 40px;
    margin-bottom: 50px;

    ul {
      width: 80%;
      list-style-type: none;

      li {
        line-height: 1.8;
        ::before {
          content: "";
          width: 6px;
          height: 6px;
          display: inline-block;
          border-radius: 50%;
          background: #7a79a1;
          vertical-align: middle;
          margin-right: 14px;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .sectionBox {
      h2 {
        padding-left: 20px;
      }
    }

    .itemBox {
      display: block;
      margin-left: 20px;

      ul {
        width: 100%;
      }
    }

    h2 {
      font-size: 20px;
    }

    .itemBoxList {
      width: 100%;
      margin: 20px 0;

      h3 {
        font-size: 18px;
        margin: 20px 0 10px;
      }
    }
  }

  @media (max-width: 420px) {
    .sectionBox {
      padding-bottom: 0;
      margin-bottom: 20px;
    }
  }
`
