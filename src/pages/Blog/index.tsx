import React from 'react';
//import {View} from 'react-native';
import { Main, DivStatus, DivPhotos } from './style';
import PhotosBlog from '@components/PhotosBlog';
import w1 from "@icons/works/image 20.png"
import w2 from "@icons/works/image 21.png"
import w3 from "@icons/works/image 22.png"


export default function Blog(){
    return(
        <Main>
            <DivStatus>

                <h1>ivana </h1>

            </DivStatus>

            <DivPhotos>

                <PhotosBlog service={w1}/>
                <PhotosBlog service={w2}/>
                <PhotosBlog service={w3}/>
            </DivPhotos>
        </Main>
    );
}