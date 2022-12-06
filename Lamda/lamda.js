//()=>{} //lamda syntax
//let sai=()=>{}  //reference name is sai
//let sai=Uname=>`hello${Uname}`;  //reference name is sai and// Uname is function parameter
//let sai=Uname=>console.log(`hello ${Uname}`);  //to console the return value 
//sai("shiva");
//let sai=Uname=>console.log(`hello ${ typeof Uname}`); //with one parameter
//sai("saikira");
//let sai=(name,age)=>console.log(`hello ${name} and your age is ${age} `);  //multiple parameters
//sai('saikiran',23);
//let hello=()=>console.log(`welcome to lambda`); //without parameter we are configuring.
//hello();
//let hello=(name:string,price:number)=>console.log(`product name is = ${name} and its  price is =${price} `); //here we are restrict the parameters.
//hello("samsung",23456.00);
var hello = function () { console.log("sai kiran"); console.log("shivaprasad"); }; //here we are doing multiple statements
hello();
