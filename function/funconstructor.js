var Add = new Function("a", "b", "return a+b"); //function constructor
console.log("addition=".concat(Add(34, 6)));
var param1 = "a";
var param2 = "b";
var operation = "return a+b";
var f1 = new Function(param1, param2, operation);
console.log(f1(12, 3));
