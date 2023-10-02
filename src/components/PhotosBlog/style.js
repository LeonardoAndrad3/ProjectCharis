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
    width: 98%;
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

    img{
        height: 90%;
        width: auto;
    }    
`

export const DivDescription = styled.div`
    width: 98%;
    padding-left: 1em;

`

export const DivComment = styled.div`
    width: 98%;
    height: auto;
    padding-left: 2em;
`

//export{}