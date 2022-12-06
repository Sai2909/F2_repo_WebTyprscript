//namespace in we cant use modular approch so 
//below type we have to impoert and and configure this
///<reference path="../Contracts/ProductCountract.ts"/> 

//and also implements we use alising
import contracts = Project.Contracts;
namespace Project {
   export namespace Templates {
       export abstract class ProductTemplate implements contracts.IProduct {
            public Name: string;
            public Price: number;
            public Qty: number;
            public Total(): number {
                return this.Qty * this.Price;
            }
            abstract Print(): void;   //abstct class means we have some implement on that l

        }

    }
}

