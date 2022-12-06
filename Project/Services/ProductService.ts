///<reference path="../Templates/ProductTemplate.ts"/>

import templates =Project.Templates;

namespace Project{
   export namespace Services{
       export class Product extends templates.ProductTemplate{
         public Name: string='';
         public Price: number =0;
         public Qty: number =0;
         public Total(): number {
             return this.Qty*this.Price;
         }
         public Print(): void {
             console.log(`Name=${this.Name}\n PRICE =${this.Price}\n qty =${this.Qty} \n total=${this.Total()}`);
         }
        }
    }
}