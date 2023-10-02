import React, { useEffect, useState } from 'react';
import work from "@icons/test.mp4"

import {Text, Title, Main, PhotoMain, ContentTitle,ContentFirst, BtnDiv, BackGround, PqDiv, DivTitle, GridDiv, ItemGrid, ServiceDiv,ProfileDiv,MainProfile, DivPhotos, PhotosGrid_1, PhotosGrid_2} from "./style.js";
import mulherMain from "@icons/initContent/iconContentFirst.png"
import iconHair from "@icons/initContent/hairIcon.png"
import "./index.css"
import hairImg from "@icons/hairImg.png"
import ContentService from "@components/ContentService"
import Profile from "@components/Profile"
import img1  from "@icons/works/image 20.png"



export default function Home(){
    
    const [hidden, setHidden] = useState(false);

    useEffect(() =>{
        document.addEventListener("scroll", (event) =>{
            if(window.pageYOffset > 1){
                setHidden(true)
            } else{
                setHidden(false);
            }
        });
    }, []);

    return(
        <>
        <Main id="main">
            <BackGround state={hidden}>
                <video muted autoPlay loop>
                    <source  src={work} type="video/mp4"/>
                </video>
            </BackGround>

            {
                hidden ?
                <ContentFirst>
                <ContentTitle>
                    <Title> 
                        Vamos retocar o visual?
                    </Title>

                    <Text>
                        Venha para o charis! Sua satisfação e nossa especialidade 
                    </Text>

                    <BtnDiv className="btnDiv">
                    <button type="button" className="btn btn-outline-dark btnFirstContent"><Text>Venha nos conhecer</Text></button>
                </BtnDiv>
               
                </ContentTitle>

          
                <PhotoMain src={mulherMain}/> 
                {/* <img className={"iconContentFirst iconHair"} alt="iconBelo" src={iconHair} /> */}

                
                </ContentFirst>

                :
                <></>
            }
           

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


            <DivPhotos>

                <ul>    
                    <li className="p1">
                        <PhotosGrid_1 src={img1}/>
                        <PhotosGrid_1 src={img1}/>
                    </li>

                    <li className="p2">
                        <PhotosGrid_2 src={img1}/>
                        <PhotosGrid_2 src={img1}/>
                    </li>

                    <li className="p3"> 
                        <PhotosGrid_1 src={img1}/>
                        <PhotosGrid_1 src={img1}/>
                    </li> 
            
                </ul>
            </DivPhotos>
        </>
    );
}