interface IProduct{
    Name:string;
    Price:number;
    Qty:number;                                                  //interface
    Total():number;
    Print():void;
}
abstract class ProductTemplate implements IProduct
{
    public Name: string;;
    public Price: number;                                         //template
    public Qty: number;
    public Total(): number {
        return this.Qty*this.Price;
    }
    public abstract Print(): void;   //INCOMPLETE SO WE CAN USE ABSTRACT
} 

//let obj =new ProductTemplate();

class Product extends ProductTemplate      //here we can implemented in this beacause all ready we are implemented so we can use extended
{
   public Print(): void {
      super.Name="sam" ;
      super.Price=23455.00;
      super.Qty=3;
      console.log(`Name=${super.Name} \n price=${super.Price} \n  qty=${super.Qty} \n total=${super.Total()}`);
      
   }  

}
let tv=new Product();
tv.Print();


