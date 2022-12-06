let family :string[] =["sai","kiran","shiva","prasad","ravalika"];
function  printlist(){
    for (var list in family){
        console.log(`${list} : ${family[list]}`);
    }
}
printlist();
//remove the last name and it returns
let removeItem:string=family.pop();
console.log(`${removeItem} removed fromo the collection`);
printlist();

//remove the first element and it returns.
let removeItem:string=family.shift();
console.log(`${removeItem} removed fromo the collection`);
printlist();

let removeItem:string[]=family.splice(1,1);
console.log(`${removeItem[1]} removed fromo the collection`);
printlist();