class Demo{
    static s=0;
    n=0;
    constructor(){
        Demo.s=Demo.s+1;        //static members are accessed using class name.
        this.n=this.n+1;        //dyamic members are accessed using this name.
    }
    print(){        //here print is a method.
        console.log(` s=${Demo.s} n=${this.n}`);

    }
}
let obj1 =new Demo;     //object creation here we using to accessing the print method using this object.
obj1.print();
let obj2 = new Demo;   //static is continoues and dynamic is discreate
obj2.print();