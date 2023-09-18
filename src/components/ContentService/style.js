import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    width: auto;
    height: auto;
    grid-area: ${props => props.gridArea};
    grid-template-areas: 
    'divImg'
    'divText'
    'button';
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 2em;
    box-shadow: 10px 20px 40px -40px black;
    border: solid 3px rgb(245,245,245, 50%);
    border-radius: 10px;
    padding-top: 2em;
`
export const Img = styled.img`
    width: 45%;
    height: auto;
    border-radius: 20px;
`
export const DivImg = styled.div`
    display: flex;
    grid-area: divImg;
    gap: 8px;
    justify-content: center;
`
export const DivText= styled.div`
    grid-area: divText;
    width: 100%;
    height: 100%;
    padding: 1.5em;
    text-align: justify;

    p{
        font-size: 24px;
        color: black;

        @media (max-width: 580px) {
            font-size: 5vw;
        }
    }
`
export const Button = styled.button`
    width: 60%;
    font-size: 25px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: button;
    margin: auto;
    margin-bottom: 1em; 

    @media (max-width: 580px) {
            font-size: 5vw;
    }
`





//export{}