//enums
// enum ErrorCodes{
//     OK,
//     Created=201,
//     Accepeted=202,
//     NonAuthorative,
//     NoContent="lol"
// }
// console.log(`Nocontent status code: ${ErrorCodes.NoContent}`);
// console.log(`Nocontent status code: ${ErrorCodes.NonAuthorative}`);  //it will 203-based on previous occurance
// console.log(`WT IS STATUS CODE OF OK: ${ErrorCodes.OK}`);  //ENUM STARTS WITH 0
//enum with string 
// enum Play{
//     Last,   //it will take 0
//     Next="next song",
//     Prev="Prvious song",
//     First="frist song"
// }
// console.log(`next=${Play.Next}`);
//ENUM NOT ALLOWED THIS TYPE
// enum PlayS{
//     Last="next song",   
//     Next,       //it will NOT ALLOWED INVALLID 
//     Prev="Prvious song",
//     First="frist song"
// }
// console.log(`next=${PlayS.Next}`);
var SN;
(function (SN) {
    SN[SN["Last"] = 1] = "Last";
    SN["Next"] = "next song";
    SN["Prev"] = "2";
    SN["First"] = "frist song";
})(SN || (SN = {}));
console.log("last=".concat(SN.Last));
console.log("next=".concat(SN.Prev));
console.log("first=".concat(SN.First));
