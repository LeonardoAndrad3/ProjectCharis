class User{

    id: String;
    name: String;
    CPF: String;
    date: Date;
    photo: any;
    number: number;
    describle: String;
    works: Array<String>;
    status: String;

    constructor(
        id:String, 
        name:String, 
        CPF:String, 
        date:Date, 
        photo:any, 
        describle:String, 
        works:Array<String>, 
        status:String,
        number: number
    )
    {
        this.id = id;
        this.name = name;
        this.CPF = CPF;
        this.date = date;
        this.photo = photo;
        this.describle = describle;
        this.works = works;
        this.status = status;
        this.number = number;
    }
}

export{User}