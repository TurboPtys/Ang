class ClassInterface{


    msg:string = "Hello"

    constructor(msg?:string){

    }

    printMsg(){
        console.log(this.msg);

    }
}

let ex = new ClassInterface('Hello world');
ex.printMsg();

interface Dog{
    name: string;
    age: number;
    color: string;
    date?:Date;
}


let dog:Dog=({name:'As',age:5,color:'Czarny'})

console.log(dog);

let json ='{"name": "Max", "age":4,"color":"red"}';
let myDog:Dog=JSON.parse(json);
console.log(myDog);
