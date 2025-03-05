// let obj ={
//     a: 1,
//     b:"radhe"
// }
// console.log(obj)
// let animal={
//     eats: true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__ = animal 

class Animal{
    constructor(name){
        this.name = name
        console.log("obj is craeted...")
    }

    eats(){
        console.log("I`m eating dude...")
    }

    jumps(){
        console.log("I`m jumping dude...")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("obj is craeted and he is a lion...")
    }

    eats(){
        console.log("I`m eating beyy...")
    }
}

let a = new Animal("kanha");
console.log(a)

let l = new Lion("sher")
console.log(l)