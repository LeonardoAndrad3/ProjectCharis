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

import startFull from "@icons/iconBlog/Star 1.png"
import startEmpty from "@icons/iconBlog/starEmpty.png"
import whats from "@icons/iconBlog/image 30 (1).png"
import { Message } from '@assets/Message';
import { User } from '@assets/User';
import {newConnection as conn} from "@config/api/app"
import Stomp from "stompjs"

interface postMessage{
    idPoster: string;
    autor:string|null;
    message: String;
    date?: Date;
}

interface getPhoto{
    date: Date,
    image: String,
    id: String
}

export default function Photos(props:{id:String, autor:User, photo:getPhoto, description:String,
date:Date, messages:Message[]}) {

    const [star, setStar] = useState(false);
    const [value, setValue] = useState("");
    const [poster, setPoster] = useState<Message | any>([]);
  
    const api = conn.getConnection();

    const socket = new WebSocket("ws://localhost:8080/ws")
    const client = Stomp.over(socket);
    conn.connectedUser();

    let iconStar = document.getElementById(`${props.id}star`)


    async function writer(element:HTMLElement){
        const textArray = ">>>>>>"
        .split("");

        textArray.forEach((l, i) =>{
            setTimeout(() => element.innerHTML += l, 50*i);
        })


        setTimeout(() => element.innerHTML = "", 700)
    }

    function connecting(){

        client.connect({}, function (frame:any){
        
        client.subscribe("/chat", function (message:any){

            const newMessage = JSON.parse(message.body)
                
            let aux:Message = 
            new Message(
                newMessage.idPoster,
                newMessage.autor,
                newMessage.message,
                newMessage.date,
                newMessage.id
            )

            setPoster((poster:any) => [...poster, aux])

            })
        }, (err:any) =>{
            console.log(err)
        });
    }

    useEffect(()=>{

        connecting();

    },[])

    useEffect(()=>{
        const getMessage = async() => {await api.get(`/poster/${props.id}/message`)
        .then((data) =>{setPoster(
            data.data.map((data:Message)=> {
                return(new Message(
                            data.idPoster,
                            data.autor,
                            data.message,
                            data.date.toString(),
                            data.id
                        
                ))}))
                }
            ).catch((err)=>{
                if(!err.response || err.code == 'ECONNABORTED'){
                }
            })}

        getMessage()
    },[])

    const fetch = () =>{

        const textA = document.getElementById("status")

        const messagem = {
            idAutor: sessionStorage.getItem("user"),
            message: value.trim(),
            idPoster: props.id
        }

        writer(textA!).then(()=>{
            textA!.innerHTML = ""
            setTimeout(()=>{client.send("/app/message",
            {},
            JSON.stringify(messagem))
            
        }, 600)
        })

   
    }

        
        // ).then(({data}) => {
        //     let test:Message = new Message(data.idPoster, data.autor, data.message, data.date.toString(), data.id) ; 
        //     setPoster([...poster, test])
        // })

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

    function newComment(e: React.FormEvent){
        e.preventDefault();

        fetch()
        setValue("")
    }

    const changeValue = (e: any) =>{
        setValue(e.target.value)
    }

    const activeSubmit = (e: any) =>{
            if(e.key === "Enter" && value.trim()){
            const newEvent = new Event("submit")
            e.target.form.dispatchEvent(newEvent)
            newComment(e);
        }
    }

    const mapping = () => {
        return(
        poster.map((msg:Message) => {
            return(<div key={`${msg.id}`}>
            <p>
                <a href="*">
                    {msg.autor?.name}
                </a>
                {msg.message}
            </p>
            <span>{`${msg.date.getDate()}/${msg.date.getMonth()+1}/${msg.date.getFullYear()}`}
            </span>
            </div>)
        })
        )
    }

    return(
        <Main>
            <DivPerfil>
                <img src={`${conn.getUrl}/images/${props.photo?.image}`} alt="" />
                <span>•</span>
                <p>{props.autor.name}</p>
            </DivPerfil>
            <DivPost>
                <img src={`${conn.getUrl}/images/${props.photo?.image}`} alt="" />
            </DivPost>

            <DivOptions>
                <div>
                    <button onClick={()=> setStar(!star)}
                    id="likedBtn">
                        <img id={`${props.id}star`} src={startEmpty} alt="" />
                    </button>
                    <a href={`https://wa.me/${props.autor.number}`}><img src={whats} alt="" />
                    </a>
                </div>
                <span>20/10/2023 - 19:30 PM</span>
            </DivOptions>
            <DivDescription>
                <p>
                <a href="">
                    {props.autor.name}
                </a>
                Somos profissionais da área de estética e cabelelheiros.</p>
            </DivDescription>
            <DivComment  id="divComment">

        {mapping()}
        
                <form 
                    onSubmit={newComment} 
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
            <p id='status'></p>
        </Main>
    );
}