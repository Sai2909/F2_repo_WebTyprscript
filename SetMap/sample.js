//SET METHOD USING MAP adding the values
// let product= new Map();  
// product.set(1,"mac");   //add a new item into map collection.
// product.set(2,"dell");
// product.set(3,"hp");
// product.set(4,"lenavo");
// let Data=new Map([
//     [1,{Names:'tv',Price:2300.00}],
//     [2,{Names:'samsung',Price:23000.00}],
//     [3,{Names:'mobile',Price:200.00}]
// ]);
//set is used for only the keys
// let Data =new Set();
// for(var keys of Array.from(Names)){
//     console.log(keys);
// }
// Names.add("Fruits");
// Names.add("Products");
// Names.add("Vehicles");
// Names.add("languaegs");
// for(let Name of Array.from(Names)){
//     console.log(Name);
// }
// let topics = new Map();
// topics.set(1, "HTML-It is a markup language");
// topics.set("js", "JavaScript-It is a client side language");
// for(var key of Array.from(topics.keys())){
//   console.log(key);
// }
var topics = new Map([
    [1, "Fruits"],
    [2, "Products"],
    [3, "Vehicles"],
    [4, "languaegs"],
]);
var topics = new Set();
topics.add("Fruits");
topics.add("Products");
topics.add("Vehicles");
topics.add("languaegs");
for (var _i = 0, _a = Array.from(topics); _i < _a.length; _i++) {
    var Name = _a[_i];
    console.log(Name);
}
