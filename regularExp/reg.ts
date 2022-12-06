let regExp :any= /[A-Z]{4,10}/;
let username:string="SAIKdsjdj";
if( username.match(regExp)){
    console.log(`hello ${username}`);
}else{
    console.log("not matched");
}