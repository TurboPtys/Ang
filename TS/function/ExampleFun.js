var ExampleFun = /** @class */ (function () {
    function ExampleFun() {
        this.msg = 'hello';
        this.helo4 = function (message) { return console.log('Witaj świecie, funkcja fat arrow ' + message); };
    }
    ExampleFun.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFun.prototype.hello = function () {
        return 'hello świecie';
    };
    ExampleFun.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFun.prototype.hello2 = function (message, message2) {
        console.log(message + ' ' + message2);
    };
    return ExampleFun;
}());
var exaple = new ExampleFun();
exaple.showMsg();
exaple.hello2('asdasd');
exaple.helo4('lol');
