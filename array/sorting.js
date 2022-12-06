var values = ["a", "e", "f", "h", "c"];
function printlist() {
    for (var item in values) {
        console.log("".concat(item, ":").concat(values[item]));
    }
}
printlist();
//to using the ascending order
console.log("--sorting for ascending---");
values.sort();
printlist();
//to using the reversing order
console.log("--revrsing order--- ");
values.reverse();
printlist();
