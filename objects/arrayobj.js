var data = [
    { Name: "dell", price: 377.00 },
    { Name: "mac", price: 374356545347.00 },
    { Name: "access", price: 3734.00 },
    { Name: "hp", price: 3345477.00 }
];
console.log("mac price is ".concat(data[2].price));
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) { //of -values and in-property
    var product = data_1[_i];
    //console.log(product);
    console.log("".concat(product.Name, "-").concat(product.price));
}
