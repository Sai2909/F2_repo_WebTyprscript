//ARRAY AS A single PARAMETER
 function PrintLists(list:string[]){
     for(var item of list){
         console.log(item);
     }
 }
PrintLists(["sai","kiran","saikiran"]);  //we are sending array type passing values
 console.log(`-------------------`);
 PrintLists(new Array('shiva','prasad','shivaprasad'));
 console.log('*******************');
 let catergories:string[]=['ravalika','devaiah','malleshwari'];
 PrintLists(catergories);

//ARRAY AS A multiple PARAMETER
function PrintList(lists:string[],sales:number[],count:number){
    for(var list of lists){
        console.log(list);
    }
    for(var sale of sales){
        console.log(sale)
    }
    console.log(`Count=${count}`)
}
PrintList(["sai","kiran","saikiran"],[10,34,45],6);  //we are sending array type passing values
console.log(`-------------------`);


