import React from 'react';
//import {View} from 'react-native';
import {
    Main, 
    DivPerfil,
    DivPost,
    DivOptions,
    DivDescription,
    DivComment
} from './style'
import photo from "@icons/works/image 20.png"
import ivana from "@icons/initContent/iconContentFirst.png"
import start from "@icons/iconBlog/Star 1.png"
import invite from "@icons/iconBlog/image 37.png"
import whats from "@icons/iconBlog/image 30 (1).png"

export default function Photos(){
    return(
        <Main>
            <DivPerfil>
                <img src={ivana} alt="" />
                <p>Ivana Nascimento</p>
            </DivPerfil>
            <DivPost>
                <img src={photo} alt="" />
            </DivPost>
            <DivOptions>
                <div>
                    <button>
                        <img src={start} alt="" />
                    </button>
                    <button>
                        <img src={invite}alt="" />
                    </button>
                    <img src={whats} alt="" />
                </div>

                <span>20/10/2023 - 19:30 PM</span>
            </DivOptions>
            <DivDescription>
                <p>Somos profissionais da área de estética e cabelelheiros.</p>
            </DivDescription>
            <DivComment>
                <p>Venha conferir e faça seu agendamento, temos os mais diversos serviços pronto para você. <span>19:30 PM</span></p>
            </DivComment>
        </Main>
    );
}