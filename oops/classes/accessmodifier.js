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
var SuperClass = /** @class */ (function () {
    function SuperClass() {
    }
    return SuperClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClass.prototype.print = function (obj1, obj2) {
        obj1.Name; //SUPER CLASS PUBLIC MEMBER
        obj2.Name; //SUPER CLASS PUBLIC MEMBER
        obj2.Quantity; //SUPER CLASS Protected MEMBER
        var sai = new DerivedClass();
        sai.Quantity;
    };
    return DerivedClass;
}(SuperClass));
var object1 = new SuperClass();
object1.Name;
var object2 = new DerivedClass();
object2.Name;
