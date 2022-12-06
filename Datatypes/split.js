var msg = "samsung, 4500.00,instock";
var data = msg.split(',');
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var value = data_1[_i];
    console.log(value);
}
//array location with index
console.log("name=".concat(data[0]));
var password = "  john";
if (password == "john") {
    console.log('verified');
}
else {
    console.log('invalid pwd');
}
