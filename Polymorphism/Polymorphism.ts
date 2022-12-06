class Calc{
    public Calculate(a,b){       //funtion

    }
}
class Addition extends Calc{
    public Calculate(a:any,b:any){
        return a+b;
    }
}
class Substraction extends Calc{
    public Calculate(a:any,b:any){
        return a-b;
    }
}
class Multipication extends Calc{
    public Calculate(a:number,b:number){
        return a*b;
    }
}
let obj:Calc[]=new Array();
obj[0]=new Addition();
obj[1]=new Substraction();
obj[3]=new Multipication();
let [add,sub,Mul]=obj;
console.log(add.Calculate(10,20));
console.log(sub.Calculate(23,56));
console.log(Mul.Calculate(3,6));

