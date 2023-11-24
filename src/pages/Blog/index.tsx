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
import { User } from '@assets/User';


interface poster{
    id:String,
    autor:User,
    description: String,
    date: Date,
    photo:{
        date: Date,
        image: String,
        id: String
    }
    messages:Array<Message>
}


export default function Blog(){
    
    const instance = axios.create({
        baseURL: "http://localhost:8080",
        timeout: 1000
    })


    const [html, setHtml] = useState<Element[] | any>(<></>)

    useEffect(()=>{
        const t = async() =>{instance.get("/poster")
        .then(({data}) => {
            setHtml(data.map((poster:poster)=> (
                <PhotosBlog
                    key={`${poster.id}`}
                    id={poster.id}
                    autor={poster.autor}
                    photo={poster.photo}
                    description={poster.description}
                    date={poster.date}
                    messages={poster.messages}

                />
            )
            ))
        })
        .catch((err) => {
            if(!err.response){
                
            }
        })
        }

        t()

    },[])

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