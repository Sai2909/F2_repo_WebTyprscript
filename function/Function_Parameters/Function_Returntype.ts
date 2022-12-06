//function return type.
 function Message(str):string{
     return str.toUpperCase();
 }
function Power(a,b):any{
return Math.pow(a,b)
}
let msg:string=Message("hello sai kiran");
let pow:number=Power(4,6);
console.log(pow);
console.log(msg);