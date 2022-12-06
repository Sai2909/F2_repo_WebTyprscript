var family = ["sai", "kiran", "shiva", "prasad", "ravalika"];
function printlist() {
    for (var list in family) {
        console.log("".concat(list, " : ").concat(family[list]));
    }
}
printlist();
//remove the last name and it returns
var removeItem = family.pop();
console.log("".concat(removeItem, " removed fromo the collection"));
printlist();
//remove the first element and it returns.
var removeItem = family.shift();
console.log("".concat(removeItem, " removed fromo the collection"));
printlist();
var removeItem = family.splice(1, 1);
console.log("".concat(removeItem[1], " removed fromo the collection"));
printlist();
