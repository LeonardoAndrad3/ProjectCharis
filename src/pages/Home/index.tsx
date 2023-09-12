import {Text, Title, Main, PhotoMain, ContentTitle,ContentFirst, BtnDiv, BackGround, PqDiv, DivTitle} from "./styled.js";
import mulherMain from "@/icons/initContent/iconContentFirst.png"
import iconHair from "@/icons/initContent/hairIcon.png"
import "./index.css"
import charisIcon from "@/icons/charisIcon.png"
import ContentService from "@/components/ContentService";


export default function Home(){
    return(
        <>
        <Main id="main">
            <BackGround/>
            <ContentFirst>
                <ContentTitle>
                    <Title> 
                        Vamos retocar o visual?
                    </Title>

                    <Text>
                        Venha para o charis! Sua satisfação e nossa especialidade 
                    </Text>
                </ContentTitle>

          
                <PhotoMain src={mulherMain}/> 
                <img className={"iconContentFirst iconHair"} alt="iconBelo" src={iconHair} />

                <BtnDiv className="btnDiv">
                    <button type="button" className="btn btn-outline-light"><Text>Venha nos conhecer</Text></button>
                    <div className="mainFlecha">
                        <div className="flecha"></div>
                    </div>
                </BtnDiv>
               
            </ContentFirst>

            {/* preference on service */}

        </Main>

            <PqDiv>
                <DivTitle>
                    <Title> 
                        Por que nos escolher?
                    </Title>
                    <Text>
                    &nbsp;Somos profissionais da área de estética e cabelelheiros. Atualmente nosso grupo aumentou, possibilitando ainda mais serviços para você cliênte. Venha conferir e faça seu agendamento, temos os mais diversos serviços pronto para você.
                    </Text>
                </DivTitle>
                <ContentService gridArea={"foto1"}/>
                <ContentService gridArea={"foto2"}/>
            </PqDiv>
        </>
    );
}