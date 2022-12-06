var Product = {
    Name: "tv",
    Price: 23456.00,
    Qty: 3,
    Total: function () {
        return this.Qty * this.Price;
    }
};
console.log("Name ".concat(Product.Name, "\n Price").concat(Product.Price, " \n Total").concat(Product.Total()));
