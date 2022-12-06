//rest parameter
//function Print(...list:any,product:any){
//function Print(...list:any,product:any){
function Print(product) {
    var list = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        list[_i - 1] = arguments[_i];
    }
    for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
        var item = list_1[_a];
        console.log(item);
    }
    console.log("product=".concat(product));
}
Print("saikiran", "shiva", "sai", 23, true);
console.log("-------------");
Print("devaiaih");
