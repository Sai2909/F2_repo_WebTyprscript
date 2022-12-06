//object as a prarmeter
function PrintList(obj:any){
    for(var property in obj){
        console.log(`${property}:${obj[property]}`);
    }
}
PrintList({Name:'sai',Age:23});