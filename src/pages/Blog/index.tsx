import React, { useEffect, useState } from 'react';
//import {View} from 'react-native';
import { Main, DivStatus, DivPhotos } from './style';
import PhotosBlog from '@components/PhotosBlog';
import w1 from "@icons/works/image 20.png"
import w2 from "@icons/works/image 21.png"
import w3 from "@icons/works/image 22.png"
import { Message } from '../../assets/Message'
import mari from "@icons/mari.png"
import ivana from "@icons/initContent/iconContentFirst.png"
import victor from "@icons/victor.png"
import axios, { AxiosInstance } from 'axios';

interface test{
    id:String,
    autor:{
        id: String,
        name: String,
        CPF: String,
        date: Date,
        photo: any,
        describle: String,
        works: Array<String>,
        status: String
    },
    description: String,
    date: Date,
    photo: {
        id: String,
        name: String,
        path: String
    },
    messages:Array<Message>
}


export default function Blog(){
    
    const instance = axios.create({
        baseURL: "http://localhost:8080",
        timeout: 1000
    })


    const [html, setHtml] = useState<Element[] | any>(<></>)

    useEffect(()=>{
        const t = async() =>{instance.get("/poster", {
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(({data}) => {
            setHtml(data.map((poster:test)=> 
                <PhotosBlog
                    id={poster.id}
                    name={poster.autor.name}
                    photo={poster.photo}
                    socket = {instance}
                />
            ))
        })
        .catch((err) => {
            if(!err.response){
                
            }
        })
        }

        t()
    },[instance])


    return(
        <Main>
            <DivStatus>

                <h1>ivana </h1>

            </DivStatus>

            <DivPhotos>

                {html}

            </DivPhotos>
        </Main>
    );
}