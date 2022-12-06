function Sum(a:any,b:any){
    return a+b;
}
function Concate(a:any,b:any){
    return`first name=${a}\n last name=${b}`;
}
function Print<T>(a:T,b:T):any{
if((typeof a)=="number"&& (typeof b)=="number"){
   // return a+b;  //its geric type so we cant use operators. must use function
   return Sum(a,b);
}else{
    return Concate(a,b);
}
}
console.log(Print<number>(4,6));
console.log(Print<string>("sai","manchala"));
