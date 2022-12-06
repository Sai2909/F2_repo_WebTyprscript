console.log("-block letters 4 to 10 characters");
var username = "SAIKIRAN";
var regexp = /[A-Z]{4,10}/;
if (username.match(regexp)) {
    console.log("hello ".concat(username));
}
else {
    console.log("username pattern miss match-".concat(username));
}
