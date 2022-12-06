//rest parameter
//function Print(...list:any,product:any){
//function Print(...list:any,product:any){
function Print(product:any,...list:any){
for(var item of list){
    console.log(item);
}
}
Print("saikiran","shiva","sai",23,true);
console.log(`-------------`);
Print("devaiaih")