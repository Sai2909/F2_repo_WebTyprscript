//SET METHOD USING MAP adding the values
// let product= new Map();  
// product.set(1,"mac");   //add a new item into map collection.
// product.set(2,"dell");
// product.set(3,"hp");
// product.set(4,"lenavo");

//also we can write configure and write
//let product= new Map()
//                    .set(1,"mac")
//                    .set(2,"dell");

//Array collection with array reference 
 let product= new Map([
     [1,"samsung"],
     [2,"nike"]
 ]);
//console.log(product.get(2)); //read value for map collection using a key reference.
//console.log(product.size);    //count of items in collection
//console.log(product.delete(4));  //remove any item from map based on key reference.
//console.log(product.has(4));  //verify whether the item available or not.
//console.log(product.keys());  //return all keys 
//console.log(product.values()); //returns all values
//console.log(product.entries());  //both key and values.
//console.log(product.clear());     //clear all the items.
//READ ALL THE KEYS
console.log(`----keys------`);
for(let item of Array.from(product.keys()) ){   //array from read the all the key in ts but is js is esily read the values
    console.log(item);

}
//READ ALL THE VALUES
console.log(`----------values-------`);
for(let value of Array.from(product.values()))
{
    console.log(value)
}
//READ THE ALL THE ENTRIES
console.log(`------------entries-----------`);
for(let entri of Array.from(product.entries())){
console.log(entri);
}

