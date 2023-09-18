import styled from 'styled-components'

export const Main = styled.div`
    grid-area: ${props => props.className};
    width: auto;
    padding-top: 150px;
    display: flex;
    justify-content: center;
`

export const IconProfile = styled.img`
    width: 100%;
    height: auto;
    max-height: 500px;
    position: relative;
    top: -30%;
    left: 1em;
    border-radius: 50%;
    grid-area: foto;
    background-color: ${props =>{
        if(!props.sexo) return "#EBAFAF"
        else return "#AA8174"
    }};

    box-shadow: -10px 10px 10px -8px rgb(0,0,0,50%);
`
export const ProfileDiv = styled.div`
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
        padding-right: 2em;
    }
    
`

//export{}