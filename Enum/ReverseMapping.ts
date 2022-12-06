//REVERSE MAPPING
enum ErrorCode{
    NotFound=404
}
let a=ErrorCode.NotFound;
console.log(`statuscode=${a}`);
let A=ErrorCode[a];   //reverse mapping
console.log(`revering=${A}`);

