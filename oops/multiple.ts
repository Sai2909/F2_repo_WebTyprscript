//multiple hierarchy single contract to extend all existing contracts.


interface IModel{
    ModelName:string;
}
interface IMemory{
    RAMsize:string;
}
interface ICamera {
    Mpx:string;
}
interface IMobile extends IModel,IMemory,ICamera  {
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