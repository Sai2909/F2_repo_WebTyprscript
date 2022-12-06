//function parameter
let pwd:string="sai";
function PrintList(success:any,failure:any){             //success is memory ,its a referemce name
if(pwd=="sai"){
    success();
}else{
    failure();
}

}
PrintList(function(){
    console.log(`login success`);
},function(){
    console.log(`login failure`);
});

