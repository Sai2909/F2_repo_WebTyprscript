let categories:string[]= ["electronics","fashiom","footwear"];

//loop
 for(var i=0;i<categories.length;i++)
 {
     console.log(categories[i]);
 }

//iterator for of values
 for( var item of categories){
     console.log(item);
 }

//iterator for in propertys
  for( var item in categories){
      console.log(item);
  }

//iterator over propeerty and values
for (var property in categories){
    console.log(`${property} :${categories[property]}`);
}
