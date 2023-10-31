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
import { Commentary } from 'src/assets/Commentary';
import { AxiosInstance } from 'axios';
import { User } from '@assets/User';

interface message{
    autor:User,
    comment: Commentary,
}

interface postMessage{
    autor:User,
    comment: Commentary,
}

export default function Photos(props:{service:any, id:String, perfil:any, name:String, socket:AxiosInstance}) {

    const socket = props.socket

    const [star, setStar] = useState(false);
    const [value, setValue] = useState("");
    const [poster, setPoster] = useState<Commentary | any>([]);

    let iconStar = document.getElementById(`${props.id}star`)

    const addComment = (e: React.FormEvent) => {
        e.preventDefault();

        let newMessage:postMessage = {
            autor: new User("", "Leonardo", "47977037840", new Date, "C:/test", "Sou cabeleleiro profissional", new Array<String>, "OFFLINE" ),
            comment:new Commentary(props.id,"Annonimation", value, new Date())
        }
        
        setPoster((current:any) => [...current, postMessage])

        setValue("")

        socket.post(`/poster/${props.id}/message`,   
            {
                autor: newMessage.autor,
                comment: newMessage.comment
            },
            {
            headers:{
                "Content-Type": "application/json",
            }
        })
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
                data.data.map((data:message)=> {
                    return(
                        new Commentary(
                            data.comment.idPoster,
                            data.comment.autor, 
                            data.comment.comment, 
                            new Date(data.comment.date)
                    ).element())}))
                        }
                )
            }
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
                <img src={ivana} alt="" />
                <span>•</span>
                <p>{props.name}</p>
            </DivPerfil>
            <DivPost>
                <img src={ivana} alt="" />
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