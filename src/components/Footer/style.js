import styled from "styled-components";

export const MainFooter = styled.div`
   
  width: 100%;
  height: auto;
  background-color: #343434;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 7% 10% 0em 10%;

  hr{
    position: absolute;
    bottom: -10%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, 0);
  }

`

export const DivGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "func stay"
    "locale stay"
    "media stay";
  grid-template-columns: auto 50%;
  gap: 2em;

  p {
    padding-left: 10%;
  }

  ul {
    list-style: none;
  }
  
  h1{
    font-size: 30px;
  }
  margin-bottom: 2em;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    h1{
      font-size: 6vw;
    }
    p{
      font-size: 4vw;
    }
  }

`;

export const Text = styled.p`

    font-size: 20px;

`;

export const Icons = styled.img`
  width: auto;
  height: auto;
`;

export const StayInto = styled.div`
  grid-area: stay;
  transition: 500ms;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 20%);
  display: grid;
  grid-template-areas: 
  "form"
  "button"; 
  grid-template-columns: auto;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 5em;

  main {
    justify-content: space-between;
    width: auto;
    height: 100%;
    display: flex;

    div{
      height: 80%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  input{
    width: 100%;
    border-radius: 10px;
    border: none;
    outline: 0px;
    padding: 10px;
  }
  
  input[type=button]{
    grid-area: button;
    position: absolute; 
    right: 0px;
    bottom: 15px;
    width: 150px;
    height: auto;
  }
  
  textarea{
    width: 40%;
    height: 90%;
    text-align: justify;
    padding: 1em;
    border-radius: 10px;
    resize: none;
  }

  h1{
    position: absolute;
    background-color: white;
    width: auto;
    top: -5%;
    left: -5%;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    height: 50px;
    color: black;
  }


  @media (max-width: 1000px) {
    height: 80%;
  }

  @media (max-width: 900px) {
    height: 500px;
    margin-top: 3cm;
  }

  @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2em;

      input[type=button]{
        position: relative;
        bottom: -10%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
 
      main{
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        align-items: center;
        height: 80%;

        div{
          width: 80%;
        }
        
        textarea{
          width: 80%;
        } 
      }
    } 

`;

export const ClockDiv = styled.div`
  grid-area: func;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;



  div {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  img {
    width: 10%;
    height: auto;
    max-width: 40px;
  }


 
`;


export const LocalDiv = styled.div`
  grid-area: locale;
  width: 100%;
  height: 100%;
  position: relative;

  div{
    display: flex;
    align-items: center;
    gap: 2em;
  }

  img {
    width: 10%;
    height: auto;
    max-width: 40px;
  }
`;

export const MediaDiv = styled.div`
  width: 100%;
  height: 100%;
  grid-area: media;
  display: flex;
  justify-content: center;
  gap: 2em;
  align-items: center;

  img{
      width: auto;
      height: 80%;
      padding: 10px;
      max-width: 90px;
      transition: 300ms;
      border-radius: 5px;

      :hover{
        transform: perspective(100px) translateZ(20px);
        box-shadow: 0px 8px 0px -2px;
      
      }
  }

  @media (max-width: 900px) {
    img{max-width: 12vw;}
    margin-top: 1cm;
  }

  @media (max-width: 600px) {
    img{max-width: 15vw}
  }

  
  @media (max-width: 400px) {
    img{max-width: 20vw}
  }



`;


//PrincipalServices

export const DivPrincipalServices = styled.div`
  grid-area: service;
  width: 100%;
  height: 100%;
  margin-top: 2em;
  margin-bottom: 3cm; 

  div{
    table{
      width: 100%;
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      tr{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      th{
        font-size: 20px; 
        @media (max-width: 600px) {
          font-size: 4vw;
        }
        
      }

      td{
        font-size: 18px;
        transition: 300ms;
        transition-timing-function: ease-in-out;
        padding: 10px;
 
        button{
          color: white;
          background-color: transparent;
          /* box-shadow: 3px 5px 14px -12px white; */
          border-radius: 10px;
          border-color: rgb(255,255,255, 20%);
          border-width: 0px 0px 2px 0px;
        }

        @media (max-width: 600px) {
          font-size: 3vw;
        }

      }

      td:hover{
          button{
            background-color: rgb(255,255,255, 20%);
            border-width: 0px 0px 1px 2px;
          }
          margin:10px
        }
    }
  }

  h1{
    margin-bottom: 1em;
  }


  

`


export const DivTagSalon = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 10px;
`
export const DivCR = styled.div`
  margin-top: 3cm;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  p{
    height: 100%;
    display: flex;
    align-items: end;
  }
`

//export{}
