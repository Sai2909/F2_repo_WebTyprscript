var newArray = [0, "", true, [], function () { }];
newArray[0] = 10;
newArray[1] = "sai";
newArray[2] = true;
newArray[3] = ["apple", "banana"];
newArray[4] = function () {
    console.log("hi this is saikiran");
};
for (var _i = 0, _a = newArray[3]; _i < _a.length; _i++) {
    var item = _a[_i];
    console.log(item);
}
//console.log(newArray[4]());
newArray[4]();
