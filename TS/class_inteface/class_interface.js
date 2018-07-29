var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = "Hello";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var ex = new ClassInterface('Hello world');
ex.printMsg();
var dog = ({ name: 'As', age: 5, color: 'Czarny' });
console.log(dog);
var json = '{"name": "Max", "age":4,"color":"red"}';
var myDog = JSON.parse(json);
console.log(myDog);
