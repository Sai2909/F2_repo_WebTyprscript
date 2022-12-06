// function Product(Id:number,Name:string){
    
// }
// Product(1,"sai");
function Name(name:string,age?:number){
    if(age==undefined){
        console.log(`name${name}`)
    }else{
        console.log(`Name=${name}\n and Age =${age}`);
    }

}
Name("saikiran");
console.log("those areoptional");
Name("shivaprasad",24);
