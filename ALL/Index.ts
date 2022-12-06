//indexing property in interface

// interface Customer{
//     [index:number]:any;
// }
// let products:Customer;
// products=[{Name:"tv",price:2334.00},{Name:"phone",price:234.00}];
// let products:any=products["0"];//array of properties are assceesing with double quote
// console.log(products.Name);

interface CustomerArray{
    [index:number]:string;  //indexing
}
let products:CustomerArray;
products=["tv","samsung"];
console.log(products[1]);