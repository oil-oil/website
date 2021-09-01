import styled from "styled-components";

export const ContentAll = styled.div`
       display:flex;
       flex-direction:column;
       width:100%;
       positon:absulute;
`

export const Navbar = styled.div`
       display:flex;
       flex-direction:row;
       height:80px;
       width:100%;
       positon:relative;
       border-bottom:2px solid #eaf2fa;
       div:nth-child(1) {
           position:relative;
           width:15%;
           margin-left:8%;
           text-align:center;
          
       }
       div:nth-child(2) {
        position:relative;
        width:44%;
        display:flex;
        flex-direction:row;
        text-align:center;
        justify-content:center;
        align-items: center;
        color:blue;
    } 
    div:nth-child(3) {
        position:relative;
        width:10%;
        display:flex;
        flex-direction:row;
        margin-left:3%;
      
    }
    div:nth-child(4) {
        position:relative;
        width：10%;
        margin-left:6%;
        margin-top:10px;
        justify-content: center;

    }
`

export const Navbarsearch = styled.div`
       display:flex;
       flex-direction:row;
       height:80px;
       position: sticky;
       width:100%;
       justify-content: center;
       align-item:center;
       border-bottom:2px solid #eaf2fa;
       div:nth-child(1) {
           position:relative;
           width:15%;
           margin-right:8%;
           top:25%;
           font-size:21px;
       }
       div:nth-child(2) {
        background-color:pink;
        display:flex;
        flex-direction:row;
        position:relative;
        width:50%;
        height:50px;
        margin-top:15px;
        margin-right:80px;
        border-radius:15px;
        input{
            position:relative;
          
            width:100%;
        }
    }
 `
export const Cardstyle = styled.div`
       display:flex;
       flex-direction:row;
 `

 export const SelectMenu = styled.div`
     display:flex;
     flex-direction:column;
     flex:1;
     position:relative;
     text-align:center;
     justify-content: center;

 `
export const Content = styled.div`
     display:flex;
     flex-direction:row;
     position:relative;
     width:100%;
     
`
export const SiderLeft = styled.div`
     display:flex;
     flex-direction:column;
     margin-left:8%;
     width:16%;
`

export const Contentitem = styled.div`
     display:flex;
     flex-direction:column;
     width:66%;
     position:relative;
     margin-left:6%;
     
`

export const Title = styled.div`
     display:flex;
     flex-direction:column;

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

export const Contentcard = styled.div`
     display:flex;
     flex-direction:row;
     width:28%;
     position:relative;
     top:70px;
     margin-right:15px;
     border-radius:15px; 
     height:300px;
`

export const Footer = styled.div`
     position:fixed;
     bottom:0;
     width:100%;
     margin-top:100px;
`