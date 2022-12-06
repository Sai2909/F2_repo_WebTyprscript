var regExp = /.,*[A-Z]{4,10}/;
var username = ",.*SAIKdsjdj";
if (username.match(regExp)) {
    console.log("hello ".concat(username));
}
else {
    console.log("not matched");
}
