var categories = ["electronics", "fashiom", "footwear"];
//loop
for (var i = 0; i < categories.length; i++) {
    console.log(categories[i]);
}
//iterator for of values
for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
    var item = categories_1[_i];
    console.log(item);
}
//iterator for in propertys
//  for( var item in categories){
//      console.log(item);
//  }
for (var property in categories) {
    console.log("".concat(property, " :").concat(categories[property]));
}
