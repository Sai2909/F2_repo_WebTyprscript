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


//Enum can contain collection of both string and numeric constants.
enum SN{
    Last=1,   //it will take 0
    Next="next song",
    Prev="2",
    First="frist song"
}
console.log(`last=${SN.Last}`);
console.log(`next=${SN.Prev}`);
console.log(`first=${SN.First}`);