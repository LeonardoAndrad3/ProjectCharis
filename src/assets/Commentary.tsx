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

export{Commentary}

