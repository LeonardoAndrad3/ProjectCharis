import styled from 'styled-components'

export const Main = styled.div`
    width: 70vw;
    max-width: 600px;
    height: auto;
    border-radius: 20px;
    border: solid 1px rgb(0,0,0,10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2em;
    margin-bottom: 2cm;
`
export const DivPerfil = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    padding: 0 0 0 1cm;
    justify-content: left;
    align-items: center;

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

`

export const DivPost = styled.div`

    width: 100%;
    height: auto;
    border-radius: 10px;

    img{
        height: 100%;
        width: 100%;
    }

`

export const DivOptions = styled.div`
    height: 50px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;

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
    }

    img{
        height: 100%;
        width: auto;
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
`

export const DivDescription = styled.div`
    width: 98%;
    padding-left: 1em;

`

export const DivComment = styled.div`
    width: 90%;
    height: auto;
    padding-left: 2em;

    div{
        width: 100%;
        height: auto;
    }

    p{
        width: 100%;
        height: auto;
        min-height: 50px;
        margin: 0px;
        gap: 10px;
        display: flex;
        align-items: start;
        color: rgb(120,120,120, 100%);
    }

    a{
        text-decoration: none;
        color: black;
    }

    span{
        position: relative;
        top: -10px;
        width: 20%;
        font-size: 12px;
        height: auto;
    }

    textarea{
        position: relative;
        left: 50%;
        bottom:0px;
        transform: translate(-53%, 0);
        margin-top: 2em;
        border: none;
        width: 80%;
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

`

//export{}