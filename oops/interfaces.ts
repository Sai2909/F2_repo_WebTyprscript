interface IProduct   //IProduct inter face
{
    Name :string;
    Price :number;
    Qty :number;
    Vendor?:string
    Total():number;
    
}
let tv:IProduct={       //object namewith interface
    Name:"TV",
    Price:23456.00,
    Qty:3,
    Total:function(){
        return this.Qty*this.Price;
    }  
}
let mobile:IProduct={    //mobile(object) is component with IProduct using with contract rules to assigning and implementing. 
    Name:"Mobile",
    Price:256.00,
    Qty:3,
    Vendor:"samsung",
    Total:function(){
        return this.Qty*this.Price;
    }  
}
function Print(obj){ // reusable function object related details.
    console.log(`Name ${obj.Name}\n Price${obj.Price} \n  quantity ${obj.Qty} \nTotal${obj.Total()} \n vendor =${(obj.Vendor==undefined)?"anonymous vendor ":obj.Vendor}`);
}
//tv.Name="LG";
Print(tv);
Print(mobile);