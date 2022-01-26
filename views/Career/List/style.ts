import styled from "styled-components";

export const SSection1 = styled.div`
  background-color: #f4f4ff;
  transition-property: border-radius, opacity, background-image;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
  padding: 0 0 0 0;
  position: relative;
  border-radius: 0 0 100px 100px;
  display: block;

  @media (max-width: 767px) {
    border-radius: 0 0 50px 50px;
  }

  .background-overlay {
    width: 100%;
    height: 100%;
    background-image: url(https://static.apiseven.com/2020/07/BG-Home.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: .05;
    position: absolute;
  }

  .container {
    max-width: 1100px;
    min-height: 90vh;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    :after {
      content: '';
      min-height: inherit;
      font-size: 0;
    }
  }

  .row {
    padding: 10px;
    width: 100%;
    display: block;
    position: relative;
    align-content: center;
    box-sizing: border-box;
    align-items: center;
    justify-items: center;
  }

  .heading-title {
    color: #000;
    font-family: "Montserrat",sans-serif;
    font-weight: 200;
    line-height: 1.2em;
    font-size: 50px;
    padding: 0;
    margin: 80px 0 55px 0;
    text-align: center;
  }

  .button-wrapper {
    text-align: center;
  }

  .elementor-button {
    font-family: "Montserrat",sans-serif;
    font-size: 15px;
    font-weight: 300;
    text-transform: uppercase;
    fill: #fff;
    color: #fff;
    background-color: #635dff;
    border-radius: 50px 0 50px 50px;
    padding: 18px 35px;
    display: inline-block;
    line-height: 1;
    text-align: center;
    width: auto; 
    transition: all .3s ease-in-out;
  }

  .elementor-button:hover {
    background-color: #fff;
    color: #635dff;
    text-decoration: none;
    transform: translateY(-8px);
  }

  @media (max-width: 1024px) {
    
    .heading-title {
      font-size: 45px;
    }
  }

  @media (max-width: 767px) {

    .heading-title {
      font-size: 32px;
    }

    .button-wrapper {
      margin: 0 0 6px 0;
    }
  }
`;

export const SSection2 = styled.div`
  margin-top: 7%;
  margin-bottom: 12%;

  @media (max-width: 1024px) {
    padding: 0 5% 0 5%;
    margin-top: 5%;
    position: relative;
  }

  @media (max-width: 767px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .widget-wrap {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%; 
  }
`;

export const SSection3 = styled.div`
  margin-bottom: 0;
  width: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;

  @media (max-width: 767px) {
    margin-top: 0;
  }

  .elementor-container {
    max-width: 1400px;
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    font-family: inherit;
  }

  .elementor-row {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    box-sizing: border-box;
  }            
`;

