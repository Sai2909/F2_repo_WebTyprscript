function Sum(a, b) {
    return a + b;
}
function Concate(a, b) {
    return "first name=".concat(a, "\n last name=").concat(b);
}
function Print(a, b) {
    if ((typeof a) == "number" && (typeof b) == "number") {
        // return a+b;  //its geric type so we cant use operators.
        return Sum(a, b);
    }
    else {
        return Concate(a, b);
    }
}
console.log(Print("sa", "kirn"));
console.log(Print("sai", "manchala"));
