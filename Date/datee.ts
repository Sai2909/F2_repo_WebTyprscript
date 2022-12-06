let Mfd:any= new Date("2020-03-30");
let weekdays:string[]=["sunday","monday","tuesday","wednessday","tursday","friday","saturday"];
let months:string[]=["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];
//Mfd.setFullYear(2021); //when we make dynamically changeing we usie this
console.log(`manufactured Month${months[Mfd.getMonth()]}\n manufacuted week day is=${weekdays[Mfd.getDay()]}\n year ${Mfd.getFullYear()}`);
