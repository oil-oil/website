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
    font-size: 39px;
    &:nth-child(1) {
      font-size: 80px;
    }
  }
`

export const SButton = styled.button`
  background-color: ${props => props.theme.color.primary};
  padding: 12px 24px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
`

export const SSection = styled.div`
  width: 1140px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  color: #3c4858;
  box-sizing: border-box;
  span {
    display: block;
  }
  .block-2-img {
    width: auto;
    height: 420px;
    margin: 35px 0;
  }
  .title {
    font-size: 60px;
  }
  .desc {
    font-size: 25px;
    margin-top: 15px;
  }
  .feature-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 29px;
      font-weight: bold;
    }
    .desc {
      margin-top: -10px;
      margin-bottom: 15px;
      font-size: 15px;
    }
  }

  .showcases {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 80px);
    grid-row-gap: 80px;
    margin-top: 60px;
    div {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      img {
        width: auto;
        max-width: 100%;
        height: 100%;
      }
    }
  }
`

export const SBlock2 = styled.div`
  background-image: url(https://static.apiseven.com/2020/05/admin-ajax.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font-size: 37px;
  padding: 50px 0 50px 120px;
  display: flex;
  align-items: center;
`