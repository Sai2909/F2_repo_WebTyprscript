let data : any=[                //collection of objects
{Name:"dell" , price:377.00},
{Name:"mac" , price:374356545347.00},
{Name:"access" , price:3734.00},
{Name:"hp" , price:3345477.00}
];
console.log(`mac price is ${data[2].price}`);
for( var product of data){             //of -values and in-property
    //console.log(product);
    console.log(`${product.Name}-${product.price}`);
} 