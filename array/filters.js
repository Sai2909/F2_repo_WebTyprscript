var some = [
    { Name: "saikiran", Score: 94, group: "maths" },
    { Name: "shiva", Score: 92, group: "phy" },
    { Name: "prasad", Score: 66, group: "maths" },
    { Name: "ravali", Score: 34, group: "che" },
    { Name: "kiran", Score: 67, group: "maths" }
];
// let Result :any[]=some.filter(function(groupName){  //it will taken only maths
//      return groupName.group=="maths";
//  });
//  console.log(Result); //all the data will come with only for maths
//one more condition is taken both maths  and phy.
var Result = some.filter(function (groupName) {
    return groupName.group == "maths" || groupName.group == "phy";
    return groupName.group == "maths";
});
//console.log(Result);
//.......using arrow function and is also called lamda 
//let obj: any[]=some.filter(obj=>obj.group=="maths");
//for ( var item of obj){
//   console.log(`${item.Name} and ${item.Score}`);
//}........
for (var _i = 0, Result_1 = Result; _i < Result_1.length; _i++) {
    var item = Result_1[_i];
    console.log("".concat(item.Name, " AND ").concat(item.Score, " with ").concat(item.group, " "));
}
