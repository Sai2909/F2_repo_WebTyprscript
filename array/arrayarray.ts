//array with the array
let student:any[]=[
    {Name:"saikiran", Score:94, group:"maths",vill:["pothram","chinnapalle"]},
    {Name:"shiva", Score:92, group:"phy",vill:["rajaram","jagitial"]},
    {Name:"prasad" ,Score:66, group:"maths",vill:["mallial","thatipelli"]},
    {Name:"ravali", Score:34, group:"che",vill:["chennaram","rammannapet"]},
    {Name:"kiran", Score:67, group:"maths",vill:["maddutla","gollapelli"]}
];
let obj: any[]=student.filter(obj=>obj.group=="maths");
for ( var item of obj){
 //console.log(`${item.Name} and ${item.Score} and village ${item.vill}` );
 console.log(`${item.Name} - ${item.Score} - ${item.vill.join("->")}` );
}