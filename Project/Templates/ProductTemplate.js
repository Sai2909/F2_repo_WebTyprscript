//namespace in we cant use modular approch so 
//below type we have to impoert and and configure this
///<reference path="../Contracts/ProductCountract.ts"/> 
var Project;
(function (Project) {
    var Templates;
    (function (Templates) {
        var ProductTemplate = /** @class */ (function () {
            function ProductTemplate() {
            }
            ProductTemplate.prototype.Total = function () {
                return this.Qty * this.Price;
            };
            return ProductTemplate;
        }());
        Templates.ProductTemplate = ProductTemplate;
    })(Templates = Project.Templates || (Project.Templates = {}));
})(Project || (Project = {}));
