var Factory = [function (a, b) { return a + b; }, function (a, b) { return a * b; }];
var Add = Factory[0], Mul = Factory[1];
console.log("addition=".concat(Add(10, 20), " \n multiply =").concat(Mul(45, 3)));
