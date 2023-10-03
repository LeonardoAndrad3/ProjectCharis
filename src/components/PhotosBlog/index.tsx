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

class Commentary{
    autor: string;
    comment: string;
    date: Date;

    constructor(autor:string,message:string, date: Date){
        this.autor = autor;
        this.comment = message;
        this.date = date;
    }

    element(){
        return `<div>
        <p>
            <a href="">
                ${this.autor}
            </a>
            ${this.comment}
        </p>
        <span>${this.date.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})
        }</span>
        </div>`
    }
}



const listCommentary: Array<Commentary> = [new Commentary("Márcia_Star","Linda", new Date()),
new Commentary("Gorila_Veia","otimo serviço", new Date())];

export default function Photos(props:{service:any}){
    const [star, setStar] = useState(false);
    const [value, setValue] = useState("");
    const [poster, setPoster] = useState(listCommentary);

    let iconStar = document.getElementById("star")
    let posters = "";
    const form = document.getElementById("form");
   
    const addComment = (e: React.FormEvent) => {
        e.preventDefault();

        let newMessage = value;

        listCommentary.push(new Commentary("Annonimation", newMessage, new Date()))

        setPoster(listCommentary)

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
        if(star){
            iconStar!.style.animation = "upStar 300ms linear"
            iconStar?.setAttribute('src', startFull)
        }
        else {
            iconStar?.setAttribute('src', startEmpty)
            iconStar ? iconStar.style.animation = "none" : console.log();
        } 

    },[star, poster])

    return(
        <Main>
            <DivPerfil>
                <img src={ivana} alt="" />
                <p>Ivana Nascimento</p>
            </DivPerfil>
            <DivPost>
                <img src={props.service} alt="" />
            </DivPost>

            <DivOptions>
                <div>
                    <button onClick={()=> setStar(!star)}
                    id="likedBtn">
                        <img id='star' src={startEmpty} alt="" />
                    </button>
                    <a href="https://wa.me/5511964824193"><img src={whats} alt="" />
                    </a>
                </div>

                <span>20/10/2023 - 19:30 PM</span>
            </DivOptions>
            <DivDescription>
                <p>Somos profissionais da área de estética e cabelelheiros.</p>
            </DivDescription>
            <DivComment  id="divComment">
                {poster.forEach(e => posters += e.element())}

                <main dangerouslySetInnerHTML={{__html: posters}}/>
            
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