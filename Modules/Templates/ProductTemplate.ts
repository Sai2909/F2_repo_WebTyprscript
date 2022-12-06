import{Iproduct}from '../Contracts/ProductContract'
export abstract class ProductTemplate implements Iproduct{
    public Name:string='';
    public Price: number=0;
    public Qty: number=1;
    public Total(): number {
        return this.Qty*this.Price;
    }
    public abstract Print(): void ; //incomplete method 
        
    }
