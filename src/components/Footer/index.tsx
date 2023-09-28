import React from "react";
//import {View} from 'react-native';
import {
  MainFooter,
  Icons,
  StayInto,
  ClockDiv,
  LocalDiv,
  MediaDiv,
  Text,
  DivPrincipalServices,
  DivTagSalon,
  DivCR,
  DivGrid,
} from "./style";
import clock from "@icons/footer/IconTime.png";
import local from "@icons/footer/IconLocal.png";
import insta from "@icons/Instagram_icon.png";
import whats from "@icons/WhatsIcon.png";
import face from "@icons/faceIcon.png";

export default function Footer() {
  return (
    <MainFooter>
      <DivGrid>
        <ClockDiv>
          <div>
            <Icons src={clock} />
            <h1> Funcionamento </h1>
          </div>

          <ul>
            <li>
              <Text>
                De <span>Terça à sábado</span> das <span>7h00 - 21h00</span>
              </Text>
            </li>

            <li>
              <Text>De domingo das 11h00 - 19h00</Text>
            </li>
          </ul>
          <hr/>
        </ClockDiv>

        <LocalDiv>
          <div>
            <Icons src={local} />
            <h1>Rua Romualdo de Sousa Brito</h1>
          </div>

          <ul>
            <li>
              <Text>Antigo final do Nazareth(2626)</Text>
            </li>

            <li>
              <Text>nº 403</Text>
            </li>

            <li>
              <Text>Cep 08150-470</Text>
            </li>

          </ul>
          <hr/>
        </LocalDiv>
        

    

        <MediaDiv>
          
          <Icons src={whats} />
          <Icons src={insta} />
          <Icons src={face} />
        </MediaDiv>

     

        <StayInto>
          <h1>Fique por dentro</h1>
          <main>
            <div>
            <input placeholder="Name" type="text" />
            <input placeholder="E-mail" type="text" />
            <input placeholder="Tel." type="text" />
            </div>
            <textarea placeholder="Mensagem..." name="mensagem" id="" cols={30} rows={10}></textarea>
          </main>
          
            <input type="button" value="Enviar" />
        </StayInto>

      </DivGrid>

      <DivPrincipalServices>

        <img src="" alt="" />
        <h1>Principais Serviços</h1>

        <div>
          <table>
              <tr>
                  <th>Ivana Nascimento</th>
                  <th>Mariana Andrade</th>
                  <th>Victor Nascimento</th>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
              <tr>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
                  <td><button>Designer</button></td>
              </tr>
          </table>
        </div>

        </DivPrincipalServices>

        <DivTagSalon>

        </DivTagSalon>


        <DivCR>
          <p>Copyrigth @2023 charis salão&Estetica</p>
        </DivCR>
    </MainFooter>
  );
}
