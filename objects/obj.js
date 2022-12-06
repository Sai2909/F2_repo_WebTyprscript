var products = {
    name: "tv",
    price: 34885.00,
    Instock: true,
    qty: 2,
    total: function () {
        return this.qty * this.price;
    },
    print: function () {
        console.log("Name=".concat(this.name, "\n Price=").concat(this.price, " \n INstock=").concat((this.Instock == true) ? "is available" : "outoff stack"));
    }
};
products.name = "redmi",
    products.price = 3748.00,
    products.Instock = true,
    products.qty = 2;
products.print();
console.log("------this is one of product--------");
//object we use multiple times with object name we use reusing object
products.name = "realme",
    products.price = 23432345.00,
    products.Instock = false,
    products.qty = 5;
products.print();
products.price = 25.00,
    products.qty = 5;
products.total();
