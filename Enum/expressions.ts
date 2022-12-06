//expressions
const enum Exressions{
    A=2,
    B=A+2,
    C=A*B


};
console.log(`a=${Exressions.A},b=${Exressions.B},c=${Exressions.C}`)


//AMBIENT EXPRESSION
const enum Exression{
    NotFount=404,
    TimeOut,           //THIS AMBIENT NOT A INITILIZER 
    MethodNotAllowed=405
};
console.log(`NOTFOUNT=${Exression.NotFount},TIMEOUT=${Exression.TimeOut},METHODNOTFOUND=${Exression.MethodNotAllowed}`);
   