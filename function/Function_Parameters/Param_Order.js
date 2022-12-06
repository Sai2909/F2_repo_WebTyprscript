//ARRAY AS A single PARAMETER
// function PrintList(list:string[]){
//     for(var item of list){
//         console.log(item);
//     }
// }
// PrintList(["sai","kiran","saikiran"]);  //we are sending array type passing values
// console.log(`-------------------`);
// PrintList(new Array('shiva','prasad','shivaprasad'));
// console.log('*******************');
// let catergories:string[]=['ravalika','devaiah','malleshwari'];
// PrintList(catergories);
//ARRAY AS A multiple PARAMETER
function PrintList(lists, sales, count) {
    for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
        var list = lists_1[_i];
        console.log(list);
    }
    for (var _a = 0, sales_1 = sales; _a < sales_1.length; _a++) {
        var sale = sales_1[_a];
        console.log(sale);
    }
    console.log("Count=".concat(count));
}
PrintList(["sai", "kiran", "saikiran"], [10, 34, 45], 6); //we are sending array type passing values
console.log("-------------------");
//PrintList(new Array('shiva','prasad','shivaprasad'));
//console.log('*******************');
//let catergories:string[]=['ravalika','devaiah','malleshwari'];
//PrintList(catergories);
