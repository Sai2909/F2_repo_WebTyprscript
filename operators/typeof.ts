let Person :any={
    Name :"shiva",
    age:30,
    gender:true, 
    shippedto :["jgl","hyd"],
    total:function(){},
    Mfd: new Date()
}
console.log(` NAME=${typeof Person.Name} age=${typeof Person.age} gender=${typeof Person.gender} shipped to ${typeof Person.shippedto} 
and total${ typeof Person.total}  date= ${typeof Person.Mfd}` );