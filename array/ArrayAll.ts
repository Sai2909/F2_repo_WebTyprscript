let newArray:any[]=[0,"",true,[],function(){}];
newArray[0]=10;
newArray[1]="sai";
newArray[2]=true;
newArray[3]=["apple","banana"];
newArray[4]=function(){
    console.log("hi this is saikiran");
};
for(var item of newArray[3]){
    console.log(item);
}
//console.log(newArray[4]());
newArray[4]();
