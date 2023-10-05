import React, { useEffect, useState } from 'react';
//import {View} from 'react-native';
import { Main, DivStatus, DivPhotos } from './style';
import PhotosBlog from '@components/PhotosBlog';
import w1 from "@icons/works/image 20.png"
import w2 from "@icons/works/image 21.png"
import w3 from "@icons/works/image 22.png"
import { Commentary } from '../../assets/Commentary'
import mari from "@icons/mari.png"
import ivana from "@icons/initContent/iconContentFirst.png"
import victor from "@icons/victor.png"
import { list } from '@assets/messages';

const listTest:Array<Commentary> = [] 
listTest.push(new Commentary("Leonardo","Muito lindo o serviço", new Date()));

interface test{
    id:number,
    autor:string,
    messages:Array<Commentary>
}

export default function Blog(){
    
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3000/poster", {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((sucess) => sucess.json())
        .then((data) => {
            setData(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <Main>
            <DivStatus>

                <h1>ivana </h1>

            </DivStatus>

            <DivPhotos>

                {data.map((poster:test)=> 
                    <PhotosBlog
                    key={poster.id} 
                    id={poster.id} 
                    service={w1} 
                    perfil={ivana}
                    name={poster.autor} 
                    poster={poster.messages}/>
                )}

            </DivPhotos>
        </Main>
    );
}