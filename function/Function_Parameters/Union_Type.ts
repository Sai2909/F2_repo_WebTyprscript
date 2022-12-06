//UNION OF TYPE FUNCTION
function Demo(param):number|string{  //param is a memomry
if((typeof param)=="number"){
return param+1;
}else{
    return`your msg:${param}`;
}
}
console.log(`${Demo(10)}`);
console.log(`${Demo("hello sai kiran")}`);
