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
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
    }
    ;
    ProductTemplate.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    return ProductTemplate;
}());
//let obj =new ProductTemplate();
var Product = /** @class */ (function (_super) {
    __extends(Product, _super); //here we can implemented in this beacause all ready we are implemented so we can use extended
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product.prototype.Print = function () {
        _super.prototype.Name = "sam";
        _super.prototype.Price = 23455.00;
        _super.prototype.Qty = 3;
        console.log("Name=".concat(_super.prototype.Name, " \n price=").concat(_super.prototype.Price, " \n  qty=").concat(_super.prototype.Qty, " \n total=").concat(_super.prototype.Total.call(this)));
    };
    return Product;
}(ProductTemplate //here we can implemented in this beacause all ready we are implemented so we can use extended
));
var tv = new Product();
tv.Print();
