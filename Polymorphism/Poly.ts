class Employee{
    public Fname:string;           //fname is property
    public Lname:string;
    public Designation:string;
    public Print(){        //here print is method
        console.log(`${this.Fname} ${this.Lname} ${this.Designation}`);  //here above we are defined with in the object we can with in class of object so we use "keyword".

    }
}
class Devloper extends Employee{
    public Print() {
        super.Fname="sai";
        super.Lname="manchala";
        super.Designation="ui";
        super.Print();  //we are calling from print function to print details
    }

}
class Adimin extends Employee{
  public Print(){
    super.Fname="shiva";
    super.Lname="manchala";
    super.Designation="full stack";
    super.Print(); 
      
  }
}
class Manager extends Employee{
public Print() {
    super.Fname="ravaliak";
    super.Lname="manchala";
    super.Designation="tester";
    super.Print(); 
}
}

//let sai:Employee[]=new Array(new Devloper(),new Adimin(),new Manager()); //here one object we are using the classes  sai is one object.
//for(var kiran of sai){
//    kiran.Print();
//}

//WITHOUT DESTUCTION OF ARRAY OF OBJECT
// let kiran:Employee[]=new Array();
// kiran[0]=new Devloper();
// kiran[1]=new Manager();
// kiran[2]=new Adimin();
// for(var sai of kiran){
//         sai.Print();
//     }

//WITH USING DESTRUCTION OF ARRAY OF OBJECT
 let shiva:Employee[]=[new Devloper(),new Adimin(),new Manager()];
 let [a,b,c]=shiva;
 for(var sai of shiva){
             sai.Print();
     }

