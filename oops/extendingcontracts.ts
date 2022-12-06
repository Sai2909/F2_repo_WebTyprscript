interface IProduct{
    Name:string;
    Price:number;
}
interface ICategory extends IProduct{    //icatergory access mebers to contract previous members also
    CategoryName:string;

}
let tv:ICategory={
    Name:"tv",
    Price:3245.00,
    CategoryName:"electonics"
};
console.log(tv);
