class Commentary{
    idPoster: String;
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
    comment: String;
    date: Date;

    constructor(idPoster: String, autor:any
        ,message:String, date: Date){
        this.idPoster = idPoster;
        this.autor = autor;
        this.comment = message;
        this.date = date;
    }

    element(){
        return(
        <div>
        <p>
            <a href="*">
                {this.autor.name}
            </a>
            {this.comment}
        </p>
        <span>{this.date.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})
        }</span>
        </div>
        )
    }
}

export{Commentary}

