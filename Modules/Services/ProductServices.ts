import{ProductTemplate} from '../Templates/ProductTemplate'

//export class ProductService extends ProductTemplate{
    export class Product extends ProductTemplate{
    public Name: string='';
    public Price: number=0;
    public Qty: number =0;
    public Total(): number {
        return this.Qty*this.Price;
    }
    public Print(): void {
        console.log(`Name=${this.Name} \n Price=${this.Price} \n  Qty=${this.Qty}\n Total=${this.Total()}`);
    }
}