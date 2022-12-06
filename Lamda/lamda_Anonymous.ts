let products:any=[
{Name:"TENNISBALL",Catergory:"crickect"},
{Name:"BALL",Catergory:"vollyball"},
{Name:"BAT",Catergory:"crickect"},
{Name:"WICKETS",Catergory:"crickect"}
];
let playing=products.filter(product=>product.Catergory=="crickect"); //ONLY FILTER THE CRICKET
//let playing=products.filter(product=>product.Catergory=="crickect"&&product.Name=="WICKETS");// WITH LOGICALexpreession OPERATIONS
//let crickectsCount:number=products.filter(product=>product.Catergory=="crickect").length;  //COUNTING THE ARRAY LEGTH
let crickectsCount:number=products.filter(product=>product.Catergory=="crickect"&&product.Name=="WICKETS").length;//WITH LOGICAL OPERATIONS
for( var item of playing){
    //console.log(`${item.Name} and this properties are ${item.Catergory}`);
    console.log(`${item.Name} `);
}
console.log(`total number of electronics products:${crickectsCount}`);