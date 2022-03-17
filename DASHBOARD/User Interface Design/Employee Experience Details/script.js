class Employee 
{
constructor(name, designation, year_of_experience)
{
    this.name=name;
    this.designation=designation;
    this.year_of_experience=year_of_experience;
}
}


function displayEmployee(name, designation, year_of_experience)
{
   var obj=createEmployee(name, designation, year_of_experience);
   if(validateObject(obj))
   {
       var currentDate=new Date();
       var actual_year_of_exp=currentDate.getFullYear()-obj.year_of_experience-2;
       var result=obj.name+" is serving the position of "+obj.designation+" since "+actual_year_of_exp;
       console.log(result);
       return result;
   }
}


function createEmployee(name, designation, year_of_experience)
{
//fill code here
var emp=new Employee(name, designation, year_of_experience);
return emp;

}

function validateObject(employee)
{
//fill code here
if(employee instanceof Employee)
{
    return true;
}
}
