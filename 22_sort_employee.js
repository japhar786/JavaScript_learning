class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name,
            this.emp_dept = emp_dept,
            this.emp_salary = emp_salary,
            this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro")
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new Employee(77, "Monika", "IT", 45000, "Wipro")
const emp_vinay = new Employee(88, "Vinay", "IT", 75000, "TCS")
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy")
console.log("************************************************************************************************************************");
console.log("1.].");
const arrayOfEmployes=[emp_anil,emp_radha,emp_rishi, emp_sonali,emp_monika, emp_vinay,emp_mahi]
arrayOfEmployes.sort((Employee)=>{
    return Employee.emp_id
})
console.log(arrayOfEmployes);