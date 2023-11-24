
import axios from "axios";

class Connection{
    constructor(){
        this.URL = "http://localhost:8080"
        this.connection = axios.create({baseURL:this.URL})
    }

    connectedUser(){
        const fecth = async() =>{
        await this.connection.get("/users")
            .then(({data}) =>{
            sessionStorage.setItem("user", data[0].id)
            })
        } 

        fecth()
    }

    getConnection(){
        return this.connection
    }

    getUrl(){
        return this.URL
    }

}

export const newConnection = new Connection()
