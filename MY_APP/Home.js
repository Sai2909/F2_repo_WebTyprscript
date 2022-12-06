"use strict";
exports.__esModule = true;
//import {ProductService} from '../Modules/Services/ProductServices'
var ProductServices_1 = require("../Modules/Services/ProductServices");
//let tv= new ProductService();
var tv = new ProductServices_1.Product();
tv.Name = "laptop";
tv.Price = 200.00;
tv.Qty = 2;
tv.Print();
