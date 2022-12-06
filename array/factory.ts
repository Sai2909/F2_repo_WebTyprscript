//destruction of array with in multiple functions using anonymous function.
let Factory:any[]=[function(a ,b){return a+b},function(a ,b) {return a*b}];
let [Add,Mul]=Factory;
console.log(`addition=${Add(10,20)} \n multiply =${Mul(45,3)}`);