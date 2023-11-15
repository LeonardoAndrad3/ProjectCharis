import React, { useEffect, useState } from 'react';
//import {View} from 'react-native';
import {
    Main, 
    DivPerfil,
    DivPost,
    DivOptions,
    DivDescription,
    DivComment,
    
} from './style'

import ivana from "@icons/initContent/iconContentFirst.png"
import startFull from "@icons/iconBlog/Star 1.png"
import startEmpty from "@icons/iconBlog/starEmpty.png"
import whats from "@icons/iconBlog/image 30 (1).png"
import { Message } from '@assets/Message';
import { AxiosInstance } from 'axios';
import { User } from '@assets/User';

interface getMessage{
    idPoster: String;
    id:String;
    autor:{
        id: String,
        name: String,
        CPF: String,
        date: Date,
        photo: any,
        describle: String,
        works: Array<String>,
        status: String
    }
    message: String;
    date: Date;
}

interface getPhoto{
    name: String,
    path: String
}

export default function Photos(props:{id:String, name:String, photo:getPhoto , socket:AxiosInstance}) {

    const socket = props.socket

    const [star, setStar] = useState(false);
    const [value, setValue] = useState("");
    const [poster, setPoster] = useState<Message | any>([]);
    const [user, setUser] = useState<User>();

    socket.get("/users")
    .then(data => {setUser(data.data[0])})
    .catch((err)=>{})
    
    let iconStar = document.getElementById(`${props.id}star`)

    const addComment = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(value)

        let newMessage:Message = 
            new Message(
            props.id,
            user!,
            value,
            new Date().toISOString(),
            ""
        )
        
        socket.post(`/poster/${props.id}/message`,   
            {
                idPoster: newMessage.idPoster,
                autor: newMessage.autor,
                message: newMessage.message,
                date: newMessage.date,               
            },
            {
            headers:{
                "Content-Type": "application/json",
            }
        })

        setPoster((current:any) => [...current, newMessage.element])

        setValue("")
        
    }
    
    
    const changeValue = (e: any) =>{
        setValue(e.target.value)
    }

    const activeSubmit = (e: any) =>{
        if(e.key === "Enter"){
            const newEvent = new Event("submit")
            e.target.form.dispatchEvent(newEvent)
            addComment(e);
        }
    }

    useEffect(()=>{
        const t = async() => {await socket.get(`/poster/${props.id}/message`,{
            headers:{
                'Content-Type': 'application/json',
            },
        })
            .then((data) =>{setPoster(
                data.data.map((data:Message)=> {
                    return(
                            new Message(
                                data.idPoster,
                                data.autor,
                                data.message,
                                data.date.toString(),
                                data.id
                            ).element()
                        )}))
                    }
                ).catch((err)=>{
                    if(!err.response || err.code == 'ECONNABORTED'){

                    }
                })}
        t()     
    },[socket, props.id])

    useEffect(()=>{
        if(star){
            iconStar!.style.animation = "upStar 300ms linear"
            iconStar?.setAttribute('src', startFull)
        }
        else {
            iconStar?.setAttribute('src', startEmpty)
            iconStar ? iconStar.style.animation = "none" : console.log();
        } 

    },[iconStar, star])

    return(
        <Main>
            <DivPerfil>
                <img src={props.photo?.path.toString()!} alt="" />
                <span>•</span>
                <p>{props.name}</p>
            </DivPerfil>
            <DivPost>
                <img src={props.photo?.path.toString()} alt="" />
            </DivPost>

            <DivOptions>
                <div>
                    <button onClick={()=> setStar(!star)}
                    id="likedBtn">
                        <img id={`${props.id}star`} src={startEmpty} alt="" />
                    </button>
                    <a href="https://wa.me/5511964824193"><img src={whats} alt="" />
                    </a>
                </div>
                <span>20/10/2023 - 19:30 PM</span>
            </DivOptions>
            <DivDescription>
                <p>
                <a href="">
                    {props.name}
                </a>
                Somos profissionais da área de estética e cabelelheiros.</p>
            </DivDescription>
            <DivComment  id="divComment">

        { poster
        }
            
                <form 
                    onSubmit={addComment} 
                    id='form'>
                        <textarea 
                        name="commentary"
                        placeholder='Comentar...' 
                        id='commentary'
                        onChange={changeValue}
                        onKeyDown={activeSubmit}
                        value={value}
                        />
                </form>
            </DivComment>
        </Main>
    );
}