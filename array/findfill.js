//to using filter
// let sales:number[]=[100,1000,1200,1300,400,3000,500,5000,6000];
// console.log(sales.filter(function(sale){
// return sale>=2000
// }).toString());
//to using find is used only 1st occurance
var prices = [100, 1000, 1200, 1300, 400, 3000, 500, 5000, 6000];
console.log(prices.find(function (price) {
    return price >= 2000;
}));
