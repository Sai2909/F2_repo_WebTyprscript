var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.Calculate = function (a, b) {
    };
    return Calc;
}());
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Addition.prototype.Calculate = function (a, b) {
        return a + b;
    };
    return Addition;
}(Calc));
var Substraction = /** @class */ (function (_super) {
    __extends(Substraction, _super);
    function Substraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Substraction.prototype.Calculate = function (a, b) {
        return a - b;
    };
    return Substraction;
}(Calc));
var Multipication = /** @class */ (function (_super) {
    __extends(Multipication, _super);
    function Multipication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multipication.prototype.Calculate = function (a, b) {
        return a * b;
    };
    return Multipication;
}(Calc));
var obj = new Array();
obj[0] = new Addition();
obj[1] = new Substraction();
obj[3] = new Multipication();
var add = obj[0], sub = obj[1], Mul = obj[2];
console.log(add.Calculate(10, 20));
console.log(sub.Calculate(23, 56));
console.log(Mul.Calculate(3, 6));
