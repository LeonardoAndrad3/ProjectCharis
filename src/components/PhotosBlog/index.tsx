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

function html(list:Array<Commentary>){
    let html = ""
    list.forEach((comment)=>{
        html += comment.element()
    })

    return html;
}


export default function Photos(props:{service:any, id:number, perfil:any, name:string, poster:Array<Commentary>}) {

    const [star, setStar] = useState(false);
    const [value, setValue] = useState("");
    const [poster, setPoster] = useState(props.poster.map((message)=> new Commentary(message.autor, message.comment, new Date(message.date))));

    let iconStar = document.getElementById(`${props.id}star`)

    const addComment = (e: React.FormEvent) => {
        e.preventDefault();

        let newMessage = value;
        let postMessage = new Commentary("Annonimation", newMessage, new Date())
        
        poster.push(postMessage)

        setValue("")

        // fetch("http://localhost:3000/poster",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify()
        // })
        // .then()
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
        if(star){
            iconStar!.style.animation = "upStar 300ms linear"
            iconStar?.setAttribute('src', startFull)
        }
        else {
            iconStar?.setAttribute('src', startEmpty)
            iconStar ? iconStar.style.animation = "none" : console.log();
        } 

        
  
    },[iconStar, star])

    useEffect(()=>{

        
        console.log("Oi")
    }, [])

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

                <main dangerouslySetInnerHTML={{__html: html(poster)}}/>
            
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