let msg : string="samsung, 4500.00,instock";
let data :string[]=msg.split(',');
for (var value of data){
    console.log(value);
}
//array location with index
console.log(`name=${data[0]}`);


//using trim it can used for removing the space and  in between we can use like jo  hn is valid
let password : string ="  john";
if (password=="john"){
    console.log('verified');
}else{
    console.log('invalid pwd');
}