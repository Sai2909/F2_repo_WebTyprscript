class Employee
{
    public FirstName:string;
    public LastName:string;
    public Designation:string;
    public Print(){
        document.write(`${this.FirstName} ${this.LastName} - ${this.Designation}<br>`);
    }
}
class FULLSTACK_DEVELOPER extends Employee
{
    FirstName = "Shiva ";
    LastName = "Prasad";
    Designation = "FULLSTACK_DEVELOPER";
    public Role:string = "Developer Role : Build, Debug, Test,code creator";
    Print(){
        super.Print();
        document.write(`${this.Role}`);
    }
}
class UI_DEVELOPER extends Employee
{
    FirstName = "Sai";
    LastName = "Kiran";
    Designation = "UI_DEVELOPER";
    public Role:string = "Admin Role : website cretor, app developer";
    Print(){
        super.Print();
        document.write(`${this.Role}`);
    }
}
class TESTER extends Employee
{
    FirstName = "Ravali";
    LastName = "MANCHALA";
    Designation = "TESTER";
    public Role:string = "TESTER Role : Testing isseus ,debugging";
    Print(){
        super.Print();
        document.write(`${this.Role}`);
    }
}

let employees:any[] = new Array();
employees[0] = new FULLSTACK_DEVELOPER();
employees[1] = new UI_DEVELOPER();
employees[2] = new TESTER();

