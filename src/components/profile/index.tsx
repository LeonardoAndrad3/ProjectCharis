import React from 'react';
//import {View} from 'react-native';
import {Main, IconProfile, ProfileDiv} from './style'
import mari from "@/icons/mari.png"
import ivana from "@/icons/initContent/iconContentFirst.png"
import victor from "@/icons/victor.png"


export default function Profile(props:{className:string, name:string, service: string, color: string, male:boolean}){

    let profile;
    switch (props.className) {
        case "mari":
            profile = mari;
            break;
        case "ivana":
            profile = ivana;
            break;
    
        case "victor":
            profile = victor;
            break;
            
        default:
            break;
    }

    return(
        <Main className={props.className}>
            <ProfileDiv color={props.color}>

                    <IconProfile sexo={props.male} src={profile} alt="" />
                
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.service}</p>

                    <p>Somos profissionais da área de estética e cabelelheiros. Atualmente nosso grupo aumentou, possibilitando ainda mais serviços para você cliênte. Venha conferir e faça seu agendamento, temos os mais diversos serviços pronto para você.
                    </p>
                </div>
            </ProfileDiv>
        </Main>
    );
}