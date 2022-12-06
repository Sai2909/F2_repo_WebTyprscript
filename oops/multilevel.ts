// accessing incremental contract technique we use multilevel .

interface IModel{
    ModelName:string;
}
interface IMemory extends IModel{
    RAMsize:string;
}
interface ICamera extends IMemory{
    Mpx:string;
}
interface IMobile extends ICamera{
    print():void;
}
let mob: IMobile={
    ModelName:"samsung",
    RAMsize:"8gb",
    Mpx:"20px",
    print:function(){
        console.log(`Name=${mob.ModelName} RAM=${mob.RAMsize} MPX=${mob.Mpx} `);
        //console.log(`Name=${this.ModelName} RAM=${this.RAMsize} MPX=${this.Mpx} `)
    }
}
mob.print();