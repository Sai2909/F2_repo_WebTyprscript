class SuperClass{
    public Name:string;
    private Price:number;
    protected Quantity:number;
}
class DerivedClass extends SuperClass{
print(obj1:SuperClass,obj2:DerivedClass):void{
    obj1.Name;   //SUPER CLASS PUBLIC MEMBER
    obj2.Name;   //SUPER CLASS PUBLIC MEMBER
    obj2.Quantity; //SUPER CLASS Protected MEMBER
    
}
}
let object1=new SuperClass();
object1.Name;
let object2=new DerivedClass();
object2.Name;