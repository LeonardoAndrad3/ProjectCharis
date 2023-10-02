import React from 'react';
//import {View} from 'react-native';
import { Main, DivStatus, DivPhotos } from './style';
import PhotosBlog from '@components/PhotosBlog';

export default function Blog(){
    return(
        <Main>
            <DivStatus>

                <h1>ivana </h1>

            </DivStatus>

            <DivPhotos>

                <PhotosBlog/>

            </DivPhotos>
        </Main>
    );
}