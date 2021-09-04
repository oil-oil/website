import styled from "styled-components";

export const SContentAll = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    positon:absulute;
    justify-content:center;
`

export const SNavbar = styled.div`
    display:flex;
    flex-direction:row;
    height:80px;
    width:100%;
    positon:relative;
    border-bottom:1px solid #eaf2fa;
    text-align:center;
    align-itens:center;
    
 div:nth-child(4) {
     position:relative;
     width：10%;
     margin-left:6%;
     justify-content: center;

 }
`
export const SNavbarimg = styled.div`

 position:relative;
 width:15.5%;
 margin-left:7%;
 text-align:center;
 img{
     width:136px;
     margin-top:25px;
     margin-left:20px;
 }
`
export const SNavbarcenter = styled.div`
 position:relative;
 width:44%;
 display:flex;
 flex-direction:row;
`

export const SelectMenu = styled.div`
 color: #1d1b84;
 font-size: 17px;
 display:flex;
 flex-direction:column;
 position:relative;
 width:18%;
 text-align:left;
 justify-content: center;
 white-space:nowrap;
 font-size: 17px;
 font-weight: 500;
 line-height: 28px;
 margin-right:50px;
 margin-left:0;
 padding-left:10px;
`
export const SNavbarbutton = styled.div`
 position:relative;
 width:10%;
 display:flex;
 flex-direction:row;
 margin-left:3%;
`
export const SNavbarstart = styled.div`
 position:absolute;
 top:25px;
 right:42px;
 width:100px;
`
export const SNavbarsearch = styled.div`
    display:flex;
    flex-direction:row;
    height:80px;
    position: sticky;
    width:100%;
    justify-Content: center;
    align-item:center;
    border-bottom:2px solid #eaf2fa;
    div:nth-child(1) {
        position:relative;
        width:15%;
        margin-left:-160px;
        top:25%;
        font-size:21px;
        font-weight: 700;
    }
    div:nth-child(2) {
     display:flex;
     position:relative;
     width:50%;
     height:50px;
     margin-top:15px;
     margin-left:80px;
     border-radius:15px;
     input{
         position:relative;
         width:100%;
         z-index:99;
     }
 }
`
export const SCardstyle = styled.div`
    display:flex;
    flex-direction:row;
`

export const SContent = styled.div`
  display:flex;
  flex-direction:row;
  position:relative;
  width:100%;
  margin-bottom:20px;
`
export const SiderLeft = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:9%;
  width:16%;
  margin-top:20px;
 font-size: 17px;
 font-weight: 400;
 line-height: 28px;
 color: #344b80;
  a{
     display:flex;
     flex-direction:row;
     positon:relative;
     margin-top:18px;
     margin-right:50px;
     img{
         
     }
  }
`

export const SContentitem = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  position:relative;
  margin-left:4%;
  
`
export const Siderright = styled.div`
  display:flex;
  flex-direction:column;
  width:66%;
  position:relative;
  margin-left:1%;
`
export const STitle = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  margin-top:50px;
  div:nth-child(1){
     font-size:12px;
     font-weight: 700;
     margin-bottom: 35px;
     color: #8c4bff;
  }
  div:nth-child(2){
     font-size:30px;
     position: relative;
     margin-bottom: 35px;
     font-weight: 700;
     transform: translateZ(1000px);
     color: #1d1b84;
  }
  div:nth-child(3){
     font-size:15px;
     font-weight: 400;
     color: #344b80;
  }
`

export const SContentcard = styled.div`
  display:flex;
  flex-direction:column;
  width:20%;
  position:relative;
  top:70px;
  margin-right:15px;
  border-radius: 10px;
  padding: 24px;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  img{
      width:30px;
      height:30px;
     opacity: 1; 
     visibility: inherit;
    }
`

export const Sidertitle = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  margin-top:20px;
  width:100%;
  h4{
      margin-top:10px;
  }
`

export const SFooter = styled.div`
  display:flex;
  flex-direction:row;
  width:90%;
  margin-top:10px;
  height:100px;
  margin-left:5%;
  border-top:2px solid #eaf2fa;

`

export const SContentlist = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  width:100%;
  margin-top:50px;
  background-color:#1a154e;
  color:white;
  border-radius:15px;
`

export const SContentstart = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  position:relative;
  justify-content:center;
  align-items:center;
  height:300px;
`