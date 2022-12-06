interface IProduct
{
    Name :string;
    Price :number;
    Qty :number;
    stock?:string
    Total():number;
    
}
let Product:IProduct={
    Name:"tv",
    Price:23456.00,
    Qty:3,
    Total:function(){
        return this.Qty*this.Price;
    },
  
}
console.log(`Name ${Product.Name}\n Price${Product.Price} \n Total${Product.Total()}`);