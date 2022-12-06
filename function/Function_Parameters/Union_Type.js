//UNION OF TYPE FUNCTION
function Demo(param) {
    if ((typeof param) == "number") {
        return param + 1;
    }
    else {
        return "your msg:".concat(param);
    }
}
console.log("".concat(Demo(10)));
console.log("".concat(Demo("hello sai kiran")));
