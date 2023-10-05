class Commentary{
    id: number;
    idPoster: number;
    autor: string;
    comment: string;
    date: Date;

    constructor(id:number, idPoster: number, autor:string,message:string, date: Date){
        this.idPoster = idPoster;
        this.id = id;
        this.autor = autor;
        this.comment = message;
        this.date = date;
    }

    element(idElement:number){
        return(
        <div key={idElement}>
        <p>
            <a href="*">
                {this.autor}
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

