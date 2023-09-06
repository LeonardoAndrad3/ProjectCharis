import {Text, Title, Main, PhotoMain, ContentTitle,ContentFirst, BtnDiv} from "./styled.js";
import mulherMain from "@/icons/initContent/iconContentFirst.png"
import iconHair from "@/icons/initContent/hairIcon.png"
import "./index.css"


export default function Home(){
    return(
        <>
        <Main id="main">
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
                <img className={"iconContentFirst iconHair"} src={iconHair} />

                <BtnDiv className="btnDiv">

                    <button type="button" className="btn btn-outline-light"><Text>Serviços</Text></button>
                    <div className="mainFlecha">
                        <div className="flecha"></div>
                    </div>
                </BtnDiv>

               
               
            </ContentFirst>
        </Main>  
        </>
    );
}