console.log(`-block letters 4 to 10 characters`);
let username : string="SAIKIRAN";
let regexp:any=/[A-Z]{4,10}/;
if (username.match(regexp)){
    console.log(`hello ${username}`);

}else{
    console.log(`username pattern miss match-${username}`);
}

