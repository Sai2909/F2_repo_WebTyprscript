// let Userdetails:any={
//     Username:'saikiran',
//     Password:'sai123'
// }
var Password = "saikiran";
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this._productName;
        },
        set: function (newName) {
            // this._productName=newName;
            if (Password && Password == "saikiran") {
                this._productName = newName;
            }
            else {
                console.log('unauthorized:your are not set product name');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var tv = new Product();
tv.ProductName = "samsung tv";
if (tv.ProductName == undefined) {
    console.log("name is readonly for this user ");
}
else {
    console.log("name=".concat(tv.ProductName));
}
