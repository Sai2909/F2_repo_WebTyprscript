let family :string[] =["sai","kiran","shiva","prasad"];
function  printlist(){
    for (var list in family){
        console.log(`${list} : ${family[list]}`);
    }
}
printlist();
family.push("saikiran","shivaprasad");
console.log("---new names are added---")
printlist();
family.unshift("malleshwari","devaiah");
console.log("---new names are added in frount---")
printlist();
family.splice(0,3,"ravali","ravalika");
console.log("---index postion,deleting items,adding elements");
printlist();