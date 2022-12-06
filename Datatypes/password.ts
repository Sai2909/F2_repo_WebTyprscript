//pwd atleast 4to 15is alpha numaeric atleast 1 uppercase letter
let password:string="joh";
let regexp:any =/(?=.*[A-z]\w{4,15})/;
if(password.match(regexp)){
    console.log(`${password}-stong passwor`);

}else{
    if(password.length<4){
        console.log(`${password} - poor ppassword`);
    }else{
        console.log(`${password} -weak password`);
    }
}
