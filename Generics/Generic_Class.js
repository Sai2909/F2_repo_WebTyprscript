var Demo = /** @class */ (function () {
    function Demo() {
    }
    return Demo;
}());
var obj = new Demo();
obj.Value = 3;
obj.add = (function (x, y) { return x + y; });
console.log("number=".concat(obj.Value, " \n add=").concat(obj.add(38, 56)));
var obj1 = new Demo();
obj1.Value = "heelo sai";
obj1.add = function (x, y) { return "".concat(x, " ").concat(y); };
console.log(obj1.Value);
console.log(obj1.add("SAI", "KIRAN"));
