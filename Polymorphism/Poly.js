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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Print = function () {
        console.log("".concat(this.Fname, " ").concat(this.Lname, " ").concat(this.Designation)); //here above we are defined with in the object we can with in class of object so we use "keyword".
    };
    return Employee;
}());
var Devloper = /** @class */ (function (_super) {
    __extends(Devloper, _super);
    function Devloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Devloper.prototype.Print = function () {
        _super.prototype.Fname = "sai";
        _super.prototype.Lname = "manchala";
        _super.prototype.Designation = "ui";
        _super.prototype.Print.call(this); //we are calling from print function to print details
    };
    return Devloper;
}(Employee));
var Adimin = /** @class */ (function (_super) {
    __extends(Adimin, _super);
    function Adimin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adimin.prototype.Print = function () {
        _super.prototype.Fname = "shiva";
        _super.prototype.Lname = "manchala";
        _super.prototype.Designation = "full stack";
        _super.prototype.Print.call(this);
    };
    return Adimin;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.Print = function () {
        _super.prototype.Fname = "ravaliak";
        _super.prototype.Lname = "manchala";
        _super.prototype.Designation = "tester";
        _super.prototype.Print.call(this);
    };
    return Manager;
}(Employee));
//let sai:Employee[]=new Array(new Devloper(),new Adimin(),new Manager()); //here one object we are using the classes  sai is one object.
//for(var kiran of sai){
//    kiran.Print();
//}
// let kiran:Employee[]=new Array();
// kiran[0]=new Devloper();
// kiran[1]=new Manager();
// kiran[2]=new Adimin();
// for(var sai of kiran){
//         sai.Print();
//     }
var shiva = [new Devloper(), new Adimin(), new Manager()];
var a = shiva[0], b = shiva[1], c = shiva[2];
for (var _i = 0, shiva_1 = shiva; _i < shiva_1.length; _i++) {
    var sai = shiva_1[_i];
    sai.Print();
}
