var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log(i);
        var j = 99;
        for (var j_1 = 0; j_1 < 3; j_1++) {
            console.log(j_1);
        }
        console.log(j);
    };
    return LetConstVar;
}());
var exa = new LetConstVar();
exa.printNumber();
