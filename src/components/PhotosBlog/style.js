import styled from 'styled-components'

export const Main = styled.div`
    width: 70vw;
    max-width: 500px;
    height: auto;
    border-radius: 20px;
  /* ;  border: solid 1px rgb(0,0,0,10%); */
    box-shadow: 1px 10px 10px -2px rgb(0,0,0,10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;
    margin-bottom: 2cm;
    transition: 100ms;

    @media (max-width: 600px) {
        width: 90vw;
    }

    @media (max-width: 500px) {
        width: 100vw;
    }
`
export const DivPerfil = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 0 0 10px;
    justify-content: left;
    align-items: center;

    span{
        color: rgb(118, 118, 118);
        position: relative;
        right: 10px;
    }

    img{
        width: auto;
        height: 70%;
        border-radius: 50%;
        background-color: var(  --color-background-one);
        margin-right: 2em;
        border: solid 1px rgb(200,100,150, 100%);
        box-shadow: 0px 0px 5px 2px rgb(200,100,150, 80%);
    }

    p{  
        display: flex;
        margin: 0px;
        height: 100%;
        align-items: center;
    }


    @media (max-width: 600px) {
        img{
            height: 9vw;
        }
    }

`

export const DivPost = styled.div`
    width: 100%;
    height: auto;

    img{
        height: 100%;
        width: 100%;
    }
`

export const DivOptions = styled.div`
    height: 30px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;

    span{

        font-size: 14px;

        @media (max-width: 450px) {
            font-size: 3vw;
        }
    }

    div{
        height: 100%;
        width: auto;
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1em;
    }

    button{
        background-color: transparent;
        border: 0px;
        padding: 0px;
        height: 100%;
        width: auto;
    }

    a{
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
    }

    img{
        height: 100%;
        width: auto;
        transition: 500ms;
    }

    @keyframes upStar {
        0%{
            transform: translate(0px, 0px) rotate(0deg);
        }
        50%{
            transform: perspective(80px) translateZ(20px);
        }
        100%{
            transform: rotate(0deg) translate(0px, 0px);
        }
    }

    @media (max-width: 500px) {

    }
`

export const DivDescription = styled.div`
    width: 98%;
    padding-left: 1em;
    text-align: start;

    a{
        text-decoration: none;
        color: black;
        font-weight: 500;
        margin-right: 10px;
    }

    @media (max-width: 600px) {
        font-size: 3vw;
    }

    @media (max-width: 400px) {
        font-size: 3.5vw;
    }

    @media (max-width: 300px) {
        font-size: 4vw;
    }

  
`

export const DivComment = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: start;


    main{
        div{
            margin-bottom: 10px;
        }
    }


    p{
        width: 100%;
        height: auto;
        min-height: 30px;
        display: flex;
        margin: 0px;
        gap: 10px;
        align-items: start;
        color: rgb(120,120,120, 100%);
    }

    a{
        text-decoration: none;
        color: black;
        height: auto;
    }

    span{
        width: 20%;
        font-size: 12px;
        height: auto;

    }

    form{
        width: 100%;
        display: flex;
    }

    textarea{
        position: relative;
        bottom:0px;
        margin-top: 2em;
        border: none;
        width: 100%;
        height: 30px;
        border-bottom: solid 1px rgb(0,0,0, 40%);
        outline: none;
        overflow-y: auto;
        overflow-x: none;
        word-break: break-all;
        resize: none;

        :focus{
            height: 50px;
            border-bottom: solid 1px rgb(0,0,0, 60%);
        }

      
    }

    @media (max-width: 500px) {
        width: 90%;
        padding: 5px;
        textarea{
            width: 90%;
        }
    }

`

//export{}