function Print() {
    console.log("print functions");
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.Print = function () {
        console.log("print method");
        Print(); //function call
    };
    return Demo;
}());
//function must call by using method
var sai = new Demo();
sai.Print(); //method
