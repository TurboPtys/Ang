class LetConstVar{

    printNumber(){
        var i =99;

        for(var i=0; i<3; i++){
            console.log(i);
        }
        console.log(i);

        let j =99;

        for(let j=0; j<3; j++){
            console.log(j);
        }
        console.log(j);
    }

    checkIf(){
        let a= 'jestem A'
        
        if(true){
            var b = 'jeste, B'
            console.log(b);
            console.log(a);
        }
    }

    showConst(){
        const num=100;
        console.log(num);
        
    }
}

let exa= new LetConstVar();
exa.printNumber();
