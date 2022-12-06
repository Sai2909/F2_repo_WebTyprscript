let Add =new Function("a","b","return a+b");   //function constructor
console.log(`addition=${Add(34,6)}`);

let param1:string="a";
let param2:string="b";
let operation:string="return a+b";
let f1=new Function(param1,param2,operation);
console.log(f1(12,3));
