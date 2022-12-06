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
        document.write("".concat(this.FirstName, " ").concat(this.LastName, " - ").concat(this.Designation, "<br>"));
    };
    return Employee;
}());
var FULLSTACK_DEVELOPER = /** @class */ (function (_super) {
    __extends(FULLSTACK_DEVELOPER, _super);
    function FULLSTACK_DEVELOPER() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Shiva ";
        _this.LastName = "Prasad";
        _this.Designation = "FULLSTACK_DEVELOPER";
        _this.Role = "Developer Role : Build, Debug, Test,code creator";
        return _this;
    }
    FULLSTACK_DEVELOPER.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write("".concat(this.Role));
    };
    return FULLSTACK_DEVELOPER;
}(Employee));
var UI_DEVELOPER = /** @class */ (function (_super) {
    __extends(UI_DEVELOPER, _super);
    function UI_DEVELOPER() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Sai";
        _this.LastName = "Kiran";
        _this.Designation = "UI_DEVELOPER";
        _this.Role = "Admin Role : website cretor, app developer";
        return _this;
    }
    UI_DEVELOPER.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write("".concat(this.Role));
    };
    return UI_DEVELOPER;
}(Employee));
var TESTER = /** @class */ (function (_super) {
    __extends(TESTER, _super);
    function TESTER() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Ravali";
        _this.LastName = "MANCHALA";
        _this.Designation = "TESTER";
        _this.Role = "TESTER Role : Testing isseus ,debugging";
        return _this;
    }
    TESTER.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write("".concat(this.Role));
    };
    return TESTER;
}(Employee));
var employees = new Array();
employees[0] = new FULLSTACK_DEVELOPER();
employees[1] = new UI_DEVELOPER();
employees[2] = new TESTER();
