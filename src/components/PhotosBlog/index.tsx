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

interface postPoster{
    service:any, 
    id:number, 
    perfil:any, 
    name:string, 
    poster:Array<Commentary>
}

interface postMessage{
    comment: Commentary,
    idPost: number
}

export default function Photos(props:{service:any, id:number, perfil:any, name:string,socket:any}) {

    const [star, setStar] = useState(false);
    const [value, setValue] = useState("");
    const [poster, setPoster] = useState<Commentary | any>([]);

    let iconStar = document.getElementById(`${props.id}star`)

    const addComment = (e: React.FormEvent) => {
        e.preventDefault();

        let newMessage = value;

        let postMessage:postMessage = {
            idPost: props.id,
            comment:new Commentary(1,props.id,"Annonimation", newMessage, new Date())
        }
        
        setPoster((current:any) => [...current, postMessage])

        setValue("")

        fetch(`http://localhost:3000/message`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },

            body: JSON.stringify(postMessage)
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
        fetch(`http://localhost:3000/message?idPost=${props.id}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((tes)=> tes.json())
        .then((data) => setPoster(data))
        .catch((err) => console.log(err))
    },[props.socket])

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
                <img src={props.perfil} alt="" />
                <span>•</span>
                <p>{props.name}</p>
            </DivPerfil>
            <DivPost>
  
                <img src={props.service} alt="" />
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

        {
            poster.map((message:any) => {return(
                new Commentary(
                    message.comment.id, 
                    message.comment.idPoster,
                    message.comment.autor, 
                    message.comment.comment, 
                    new Date(message.comment.date)
            ).element(message.id))})

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