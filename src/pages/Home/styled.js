import styled from 'styled-components';
import background from "@icons/fundoSalao.jpg"
import backgroundProfile from "@icons/teste.jpg"

export const Main = styled.div`
    width: 100%;
    height: 103vh;
    position: relative;
    top: -2em;
    /* linear-gradient(to right,
    var(--color-background-one), 
    var(--color-background-two)); */
    margin-bottom: 4em;
`
export const BackGround = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 40%;
    background-image:  url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(3px) brightness(50%);
    backdrop-filter: brightness(100%);
    
    video{
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
    }

`

export const Text = styled.p`
    font-size: 1.7vw;

    @media (max-width: 1200px) {
        font-size: 20px;
    }
`

export const Title = styled.h1`
    font-size: 50px;

    @media (max-width: 1200px) {
        font-size: 40px;
    }
`

export const PhotoMain = styled.img`
    width: 40%;
    height: 80%;
    min-width: 300px;
    position: absolute;
    bottom: 20%;
    left: -15%;
    animation: profile 20s ease-in-out infinite;
    transition: all 1s ease-in-out;
    background-color: rgb(255,255,255,20%);
    box-shadow: 1px 1px 10px 1px rgb(0,0,0,20%);

    @keyframes profile {
        0%{
            border-radius: 100% 100% 100% 100% / 80% 100% 50% 100%;
        }
        25%{
            border-radius: 80% 100% 100% 100% / 50% 80% 100% 50%;
        }
        50%{
            border-radius: 19% 100% 20% 100% / 20% 50% 30% 80%;
        }
        75%{
            border-radius: 60% 20% 50% 20% / 100% 20% 80% 30%;
        }
        100%{
            border-radius: 100% 100% 100% 100% / 80% 100% 50% 100%;
        }
    }


    @media (max-width: 1200px) {
        display: none;
    }
`

export const ContentFirst = styled.div`
    width: 80%;
    height: 74%;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%);
    /* background-color: rgb(255,255,255,50%); */
    color: black;
    max-height: 900px;

    @media (max-width: 1200px) {
        transform: translate(-50%, -40%);
    }
`

export const ContentTitle = styled.div`
    width: auto;
    height: 100%;
    position: absolute;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    @media (max-width: 1200px) {
        width: 95%;
        left: 50%;
        transform: translate(-50%, 0);
        align-items: center;
    }
`

export const BtnDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, 60%);
    width: 50%;
    height: 20%;
    display: flex;

    @media (max-width: 1200px) {
        left: 50%;
        width: 100%;
        transform: translate(-50%, 40%);
        align-items: center;
    }
`

export const PqDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-areas: 
    "text text foto1 foto2";
    grid-template-columns: 40% auto auto;
    width: 95%;
    height: auto;
    gap: 2em;
    margin: auto;

    @media (max-width: 1100px) {
        grid-template-areas: 
        "text text"
        "foto1 foto2";
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
    }

    @media (max-width: 580px) {
        grid-template-areas: 
        "text"
        "foto1"
        "foto2";
        grid-template-columns: auto;
    }

    margin-bottom: 5em;
`

export const DivTitle = styled.div`
    grid-area: text;

    @media (max-width: 1200px) {
        margin-left: 2em;
        margin-right: 2em;
    }

    p{
        text-align: justify;
        font-size: 30px;

        @media (max-width: 600px) {
            font-size: 8vw;
        }
    }
    h1{
        text-align:center;
        margin-bottom: 1em;

        @media (max-width: 600px) {
            font-size: 8vw;
        }
    }
`

// Div to Service on salon hair

export const ServiceDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    h1{
        margin-top: 2em;
        margin-bottom: 2em;
    }

    margin-bottom: 10em; 

`

export const GridDiv = styled.div`
    margin-bottom: 6em; 
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-template-rows: auto;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    gap: 3em;

    @media (max-width: 1400px) {
        grid-template-columns: auto auto auto;
    }
`

export const ItemGrid = styled.img`
    width: 100px;

    @media (max-width: 1400px) {
        width: 15vw;
    }

    @media (max-width: 350px) {
        width: 10vw;
    }
`

// profissional of stetic

export const MainProfile = styled.div`

    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center; 
    width: 100%;
    background-image: url(${backgroundProfile});
    background-repeat: no-repeat;
    background-size: cover;

    h1{
       color: white;
       position: relative;
       top: 2vw;
    }


`

export const ProfileDiv = styled.div`
    display: grid;  
    width: 90%;
    margin-bottom: 5em;
    grid-template-areas: 
    "texto texto"
    "ivana mari"
    "victor mari";
    justify-content: space-between;
    align-items:center;    
    gap: 1em;

    p{
        grid-area: texto;
        align-items: center;
    }

    @media (max-width: 1000px) {
        grid-template-areas: 
        "texto"
        "ivana"
        "victor"
        "mari";
    }
`



//photos in service

export const DivPhotos = styled.div`

    width: 90%;
    height: 100%;
    margin: auto;
    margin-top: 5em;

    ul{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas: "p1 p2 p3";
        list-style: none;
        padding-left: 0;

        @media (max-width: 450px) {
            grid-template-areas: 
            "p1" 
            "p2"
            "p3";

        }

    }

    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        gap: 1.5em;

        @media (max-width: 450px) {
            flex-direction: row;
            gap: 10px;
            padding: 0px;
        }

    }
`

export const PhotosGrid_1 = styled.img`
    width: 95%;
    height: 50%;
`

export const PhotosGrid_2 = styled(PhotosGrid_1)`

`

//export{}