//set is used for only the values
var Names = new Set();
Names.add("Fruits");
Names.add("Products");
Names.add("Vehicles");
Names.add("languaegs");
for (var _i = 0, _a = Array.from(Names); _i < _a.length; _i++) {
    var Name = _a[_i];
    console.log(Name);
}
