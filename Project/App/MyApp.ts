///<reference path="../Services/ProductService.ts"/>

import services =Project.Services;

let tv = new services.Product();
tv.Name="samsung";
tv.Price=234.00;
tv.Qty=2;
tv.Print();