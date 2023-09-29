import styled from 'styled-components'

export const Main = styled.div`
    grid-area: ${props => props.className};
    width: auto;
    padding-top: 150px;
    display: flex;
    justify-content: center;
`

export const IconProfile = styled.img`
    transition: 500ms;
    width: 100%;
    height: auto;
    max-height: 500px;
    position: relative;
    top: -30%;
    left: 1em;
    border-radius: 50%;
    grid-area: foto;
    background-color: ${props => props.color};
    box-shadow: -10px 10px 10px -8px rgb(0,0,0,50%);

    @media (max-width: 1200px) {
        width: 50%;
        top: 30px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        top: -30%;
    }

    @media (max-width: 650px) {
        margin-top: 1em;
        top: 0px;
        left: 0px;
        width: 80%

    }



`
export const ProfileDiv = styled.div`
    transition: 500ms;
    position: relative;
    background-color: ${props => props.color};
    width: 95%;
    height: auto;
    border-radius: 8px;
    display: grid;
    grid-template-areas: "foto texto";
    gap: 2em;

    div{
        color: white;
        display: flex;
        flex-direction: column;
        grid-area: texto;
        justify-content: center;
        align-items: center;
        text-align: justify;
        padding: 2em;
    }

 

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 1000px) {
        display: grid;
    }

    @media (max-width: 650px) {
        display: flex;
        width: 70%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        p{
        font-size: 3.5vw;
        }
    }

    @media (max-width: 350px) {
        display: flex;
        width: 70%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        p{
        font-size: 4vw;
        }
    }
    
`

//export{}