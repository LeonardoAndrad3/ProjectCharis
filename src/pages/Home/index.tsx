import {Text, Title, Main, PhotoMain, ContentTitle,ContentFirst, BtnDiv, BackGround, PqDiv, DivTitle, GridDiv, ItemGrid, ServiceDiv,ProfileDiv,MainProfile} from "./styled.js";
import mulherMain from "@/icons/initContent/iconContentFirst.png"
import iconHair from "@/icons/initContent/hairIcon.png"
import "./index.css"
import hairImg from "@/icons/hairImg.png"
import ContentService from "@/components/ContentService";
import Profile from "@/components/profile";


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


        </Main>
            {/* why to choosee us */}
            <PqDiv>
                <DivTitle>
                    <Title> 
                        Por que nos escolher?
                    </Title>
                    <Text className={"textChoosee"}>
                    &nbsp;&nbsp;&nbsp;&nbsp;Somos profissionais da área de estética e cabelelheiros. Atualmente nosso grupo aumentou, possibilitando ainda mais serviços para você cliênte. Venha conferir e faça seu agendamento, temos os mais diversos serviços pronto para você.
                    </Text>
                </DivTitle>
                <ContentService gridArea={"foto1"}/>
                <ContentService gridArea={"foto2"}/>
            </PqDiv>

            {/*service on salon hair*/}

            <ServiceDiv>

                <Title> 
                    Serviços
                </Title>

                <GridDiv>
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />

                    {/* //  */}

                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                    <ItemGrid src={hairImg} alt="" />
                </GridDiv>


            </ServiceDiv>




        
            <MainProfile>
                <Title>
                    Profissionais
                </Title>

                <ProfileDiv>
                    <Profile 
                    className="mari" name="Mariana Andrade" service="Manicure & esteticista"
                    color="#C99090"
                    male={false}/>

                    <Profile 
                    className="ivana"
                    name="Ivana Nascimento" service="Manicure & esteticista"
                    color="#552424"
                    male={false}/>

                    <Profile 
                    className="victor"
                    name="Victor Nascimento" service="Manicure & esteticista"
                    color="#272727"
                    male/>


                </ProfileDiv>
            </MainProfile>
   


        </>
    );
}