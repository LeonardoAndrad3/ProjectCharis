import React from 'react';
//import {View} from 'react-native';
import {Main, DivImg, Img, DivText, Button} from './style'
import f1 from "@/icons/f1.jpg"
import f2 from "@/icons/f2.jpg"


export default function ContentService(props: {gridArea: String}){

    return(
        <>
            <Main gridArea={props.gridArea}>
                <DivImg>   
                    <Img src={f1} alt="" />
                    <Img src={f2} alt="" />
                </DivImg>

                <DivText>
                    <p>
                    &nbsp; &nbsp;Antes é depois de um serviço realizado por profissionais qualificados e mestre na estetica para você cliente ficar na sua melhor forma.
                    </p>
                </DivText>

                <Button className='btn btn-outline-dark'>
                    contate-nos
                </Button>

            </Main>
        </>
        
    );
    

}