class Demo<T>{
     Value:T;
    add:(x:T,y:T)=>T;

}
let obj=new Demo<number>();
obj.Value=3;
obj.add=(function(x,y){return x+y});
console.log(`number=${obj.Value} \n add=${obj.add(38,56)}`);

let obj1 =new Demo<string>();
obj1.Value="heelo sai";
obj1.add=function(x,y){return`${x} ${y}`};
console.log(obj1.Value);
console.log(obj1.add("SAI","KIRAN"));

