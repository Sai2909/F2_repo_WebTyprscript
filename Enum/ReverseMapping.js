//REVERSE MAPPING
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NotFound"] = 404] = "NotFound";
})(ErrorCode || (ErrorCode = {}));
var a = ErrorCode.NotFound;
console.log("statuscode=".concat(a));
var A = ErrorCode[a]; //reverse mapping
console.log("revering=".concat(A));
//console.log(---------enum string with reversing------------)
var Names;
(function (Names) {
    Names["Manchala"] = "saikiran";
})(Names || (Names = {}));
var firstName = Names.Manchala;
console.log("first name=".concat(Names.Manchala));
var LastName = Names[firstName]; //reverse mapping
console.log("Last name=".concat("LastName"));
