var data = [
    [{ Name: "sai", age: 23 }, { Name: "siva", age: "24" }, [{ Name: "prasad", age: "29" }]],
    [{ Name: "saikiran", age: 25 }]
];
console.log(data[0]);
console.log(data[1][0].Name); //1st array[1] taken index means starts with 0. and second array[0]its a object and its have property
//console.log(data[0][0].Name);
//console.log(data[0][1].Name);
console.log(data[0][1].Name);
