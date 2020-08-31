import styled from 'styled-components'

export const SBlock1 = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://static.apiseven.com/2020/05/1588827227-skyscrapers-looking-up-scaled.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  span {
    padding: 0 25px;
    font-size: 18px;
    &:nth-child(1) {
      font-size: 34px;
    }
  }

  @media (min-width: 1200px) {
    span {
      font-size: 40px;
      &:nth-child(1) {
        font-size: 80px;
      }
    }
  }
`

export const SButton = styled.button`
  background-color: ${props => props.theme.color.primary};
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 14px;
  a:link, a:visited {
    color: #fff;
    &:hover {
      text-decoration: none;
    }
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`

export const SSection = styled.div`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  color: #3c4858;
  box-sizing: border-box;
  padding: 0 10px;
  span {
    display: block;
  }
  .block-2-img {
    width: 100%;
    margin: 35px 0;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
  }
  .desc {
    font-size: 18px;
    margin-top: 15px;
    text-align: justify;
  }
  .feature-list {
    display: grid;
    grid-template-columns: 1fr;
  }
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 26px;
      font-weight: bold;
    }
    .desc {
      margin-top: -10px;
      margin-bottom: 15px;
      font-size: 18px;
    }
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  .showcases {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 80px);
    grid-row-gap: 20px;
    margin-top: 30px;
    div {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1140px;
    padding: 0;
    margin-bottom: 120px;

    .title {
      font-size: 60px;
    }

    .desc {
      font-size: 25px;
      margin-top: 15px;
    }

    .block-2-img {
      width: auto;
      height: 600px;
      margin: 60px 0;
    }

    .feature-list {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }

    .feature-item {
      .title {
        font-size: 29px;
      }
      .desc {
        margin-top: -10px;
        margin-bottom: 15px;
        font-size: 18px;
      }
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }

    .showcases {
      margin-top: 60px;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 80px);
      grid-row-gap: 120px;
    }
  }
`

export const SBlock2 = styled.div`
  background-image: url(https://static.apiseven.com/2020/05/admin-ajax.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80px;
  div {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1200px) {
    height: 180px;
    font-size: 37px;
    div {
      width: 1170px;
    }
  }
`
