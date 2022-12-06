// let Userdetails:any={

//     Username:'saikiran',
//     Password:'sai123'
// }
let Password:string="saikiran";


class Product{
    private _productName:string;      //private  _productName property
         
    get ProductName():string{              //public productnma accessor  to reference
        return this._productName;
    }
    set ProductName(newName:string){
       // this._productName=newName;
        if(Password && Password=="saikiran"){
            this._productName=newName;
        }else{
            console.log('unauthorized:your are not set product name');
        }

    }
}
let tv= new Product();
tv.ProductName="samsung tv";
if(tv.ProductName==undefined){
    console.log(`name is readonly for this user `)
} else{
    console.log(`name=${tv.ProductName}`);
}
