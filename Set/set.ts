//set is used for only the keys

let Names =new Set();
Names.add("Fruits");
Names.add("Products");
Names.add("Vehicles");
Names.add("languaegs");
for(let Name of Array.from(Names)){
    console.log(Name);
}