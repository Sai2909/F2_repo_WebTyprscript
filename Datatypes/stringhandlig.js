//includes:used to verify given characters present in sting .and it returns boolean means true/false.
var msg = "welcome to typescript string method";
if (msg.includes("typescript")) {
    console.log("you are using typescipt");
}
else if (msg.includes("javascript")) {
    console.log("you are not usinng javaasript");
}
