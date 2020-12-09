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
    margin-bottom: 0;
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

export const SCard = styled.div`
  width: 50%;
  min-height: 1px;
  height: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0 25px 0 0 ;
  box-sizing: border-box;
  margin-top: 5%;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 0 30px 0;
    padding: 0;
  }
`;

export const SType = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 0;
  max-width: 100%;
  position: relative;
  padding: 15px 50px 12px 50px;
  background-color: #635dff;
  border-radius: 0 30px 0 0;
  display: flex;
  box-sizing: border-box;
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1;
`;

export const SContent1 = styled.div`
  width: 100%;
  height: 100%;
  border-style: solid;
  border-width: 0 0 0 2px;
  border-color: #653dff;
  padding: 0 75px 0 50px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, .08);
  transform-style: preserve-3d;
  text-align: left;
  justify-content: center;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-box-align: stretch;
  align-items: stretch;
  box-sizing: border-box;
  background-color: #fff;
  transition: all .3s ease-in-out;

  @media (max-width: 767px) {
    padding: 15px 20px 0 20px;
  }
`;

export const SContent2 = styled.div`
  background-color: #f4f4ff;
  border-style: solid;
  box-sizing: border-box;
  border-width: 0 0 0 2px;
  border-color: #653dff;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all .3s ease-in-out;
  display: flex;
  padding: 66px 75px 40px 50px;
  text-align: left;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-box-align: stretch;
  align-items: stretch;
  justify-content: center;

  :hover {
    opacity: 1;
  }

  @media (max-width: 767px) {
    padding: 0 20px 0 20px;
  }
`;

export const SName = styled.h2`
  margin-bottom: 20px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.4em;
  box-sizing: border-box;

  :not(:last-child) {
    margin: 0 0 20px;
    padding: 0;
  }
 
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const SDescription = styled.p`
  margin-bottom: 30px;
  color: #3d4e60;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 300;
  box-sizing: border-box;
  
  :not(:last-child) {
    margin: 0 0 30px;
    padding: 0;
  }
    
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const SButton = styled.button`
  margin-left: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  color: #635dff;
  background-color: rgba(99, 93, 255, .16);
  border-color: rgba(255, 255, 255, 0);
  border-radius: 29px;
  cursor: pointer;
  align-self: center;
  margin-right: auto;
  padding: 12px 24px;
  display: inline-block;
  line-height: 1;
  fill: #fff;
  text-align: center;
  box-sizing: border-box;
  outline: none !important;
`;

export const SContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;
