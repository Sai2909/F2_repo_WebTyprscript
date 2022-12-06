function AjaxCall(success:any,failure:any){  //callback mechanisim using paarameters
    success= function(){

        console.log("requested successs");
    }
    failure=function(){
        console.log("request failure");
    }
}