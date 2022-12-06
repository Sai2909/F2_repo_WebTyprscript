var Mfd = new Date("2020-03-30");
var weekdays = ["sunday", "monday", "tuesday", "wednessday", "tursday", "friday", "saturday"];
var months = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
Mfd.setFullYear(2021);
console.log("manufactured Month".concat(months[Mfd.getMonth()], "\n manufacuted week day is=").concat(weekdays[Mfd.getDay()], "\n year ").concat(Mfd.getFullYear()));
