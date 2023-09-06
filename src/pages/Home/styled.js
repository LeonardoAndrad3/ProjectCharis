import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    height: 103vh;
    position: relative;
    top: -2em;
    background-image:  
    linear-gradient(to right,
    var(--color-background-one), 
    var(--color-background-two));
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
    width: 55%;
    height: 95%;
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
    width: 70%;
    height: 74%;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    background-color: rgb(255,255,255,20%);
    color: white;
    max-height: 1000px;
`

export const ContentTitle = styled.div`
    width: auto;
    height: 100%;
    position: absolute;
    right: 0px;
    display: flex;
    flex-direction: column;
    align-items: end;
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


//export{}