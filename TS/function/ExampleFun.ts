class ExampleFun{
    msg:string ='hello';

    showMsg():void{
        console.log(this.msg);
    }

    hello():string{
        return 'hello świecie'
    }

    hello1(message: string){
        console.log(message)
    }

    hello2(message:string, message2?: string){
        console.log(message+' '+ message2);
    }

    helo4 = message => console.log('Witaj świecie, funkcja fat arrow '+message);
}

var exaple = new ExampleFun();
exaple.showMsg();
exaple.hello2('asdasd');
exaple.helo4('lol');