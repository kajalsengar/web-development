class user{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value.lenght < 4){
            console.log(" Your name is too short.")
            return;
        }
        this._name = value;
    }
}

let use = new user("shiv ji");
console.log(use.name);

// use = new user(" ");
use.name = ""