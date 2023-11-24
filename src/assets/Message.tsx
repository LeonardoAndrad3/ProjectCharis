import { User } from "./User";

class Message{

    idPoster: String;
    id!: String;
    autor!:User;
    message: String;
    date: Date;

    constructor(idPoster: String, autor:User
        ,message:String, date: string, id:String){
        this.idPoster = idPoster;
        this.autor! = autor;
        this.message = message;
        this.date = new Date(date);
        this.id = id;
    }

    element(){
        return(
        <div key={`${this.id}`}>
        <p>
            <a href="*">
                {this.autor?.name}
            </a>
            {this.message}
        </p>
        <span>{`${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}`}
       
        </span>
        </div>
        )
    }
}

export{Message}

