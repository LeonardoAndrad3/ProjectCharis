import styled from 'styled-components';
import background from "@/icons/fundoSalao.jpg"

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
    height: 100%;
    background-image:  url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(8px) brightness(20%);
    backdrop-filter: brightness(100%);
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
        font-size: 30px;
    }
`

export const PhotoMain = styled.img`
    width: 50%;
    height: 90%;
    min-width: 300px;
    position: absolute;
    bottom: -1em;
    left: -18%;
    animation: profile 20s ease-in-out infinite;
    transition: all 1s ease-in-out;
    background-color: rgb(255,255,255,20%);
    box-shadow: 1px 1px 120px -100px black;

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
    color: white;
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
    display: grid;
    grid-template-areas: 
    "text text foto1 foto2";
    grid-template-columns: 40% auto auto;
    width: 100%;
    height: auto;
    gap: 2em;

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

    margin-bottom: 10em;
    padding-right: 1em;
`

export const DivTitle = styled.div`
    margin-left: 4em;
    p{
        text-align: justify;
        font-size: 40px
    }
    h1{
        text-align:center;
        margin-bottom: 1em;
    }
`

//export{}