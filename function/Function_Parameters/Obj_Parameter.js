//object as a prarmeter
function PrintList(obj) {
    for (var property in obj) {
        console.log("".concat(property, ":").concat(obj[property]));
    }
}
PrintList({ Name: 'sai', Age: 23 });
