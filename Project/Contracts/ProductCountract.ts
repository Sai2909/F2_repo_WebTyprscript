//Namespaces
namespace Project{         //that namespce name.
    export namespace Contracts    //contract reference name   this is subnamespace
    {
       export interface IProduct
        {
            Name:string;
            Price:number;
            Qty:number;
            Total():number;    //method
            Print():void;      //void type means only taking console values

        }
    }
    
}