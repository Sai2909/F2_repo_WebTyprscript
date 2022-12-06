var products = [
    { Name: "TENNISBALL", Catergory: "crickect" },
    { Name: "BALL", Catergory: "vollyball" },
    { Name: "BAT", Catergory: "crickect" },
    { Name: "WICKETS", Catergory: "crickect" }
];
var playing = products.filter(function (product) { return product.Catergory == "crickect"; }); //ONLY FILTER THE CRICKET
//let playing=products.filter(product=>product.Catergory=="crickect"&&product.Name=="WICKETS");// WITH LOGICALexpreession OPERATIONS
//let crickectsCount:number=products.filter(product=>product.Catergory=="crickect").length;  //COUNTING THE ARRAY LEGTH
var crickectsCount = products.filter(function (product) { return product.Catergory == "crickect" && product.Name == "WICKETS"; }).length; //WITH LOGICAL OPERATIONS
for (var _i = 0, playing_1 = playing; _i < playing_1.length; _i++) {
    var item = playing_1[_i];
    //console.log(`${item.Name} and this properties are ${item.Catergory}`);
    console.log("".concat(item.Name, " "));
}
console.log("total number of electronics products:".concat(crickectsCount));
