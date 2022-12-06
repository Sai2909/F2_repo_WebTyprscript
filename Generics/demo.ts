//generics
function PrintValue<T>(param:T):T{
return param;
}
console.log(PrintValue<string>("sai kiarn"));
console.log(PrintValue<number>(45));