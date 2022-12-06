function GetData(obj) {
    if (obj instanceof Array) {
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var item = obj_1[_i];
            console.log(item);
        }
    }
    else {
        for (var property in obj) {
            console.log("".concat(property, " :").concat(obj[property]));
        }
    }
}
var Products = {
    Name: "nike",
    Price: 345,
    InStock: true
};
var Product = [
    { Name: "tv", Price: 34556, InStock: false },
    { Name: "mac", Price: 356, InStock: true },
    { Name: "lap", Price: 56, InStock: false }
];
console.log("products list:");
GetData(Product);
console.log("--------------");
GetData(Products);
