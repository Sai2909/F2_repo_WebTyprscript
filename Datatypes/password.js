//pwd atleast 4to 15is alpha numaeric atleast 1 uppercase letter
var password = "joh";
var regexp = /(?=.*[A-z]\w{4,15})/;
if (password.match(regexp)) {
    console.log("".concat(password, "-stong passwor"));
}
else {
    if (password.length < 4) {
        console.log("".concat(password, " - poor ppassword"));
    }
    else {
        console.log("".concat(password, " -weak password"));
    }
}
