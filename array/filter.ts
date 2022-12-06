 let data:any[]=[
    {Name:"saikiran", Score:94, group:"maths"},
    {Name:"shiva", Score:92, group:"phy"},
    {Name:"prasad" ,Score:66, group:"maths"},
    {Name:"ravali", Score:34, group:"che"},
    {Name:"kiran", Score:67, group:"maths"}
];
let SearchResult :any[]=data.filter(function(groupName){
    return groupName.group=="maths";
});
for(var item of data){
    let some :any=[];
    if(item.group=="maths"){
        some.push(item);
        console.log(`my output,${item.group} we need ${item.Name}` );
    }
    
    //console.log(`total data==${item.Name} and only maths group==${item.group}`);
}
//console.log(SearchResult);