var Student = /** @class */ (function () {
    function Student(name, rollno, marks, contact) {
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        this.contact = contact;
    }
    Student.prototype.getCollegeName = function () {
        throw new Error("Method not implemented.");
    };
    Student.prototype.getStudent = function () {
        console.log("".concat(this.name, " ").concat(this.rollno, " ").concat(this.marks, " ").concat(this.contact));
    };
    return Student;
}());
var studentObj = new Student('Namdev', '#A12', 75, 976653060);
studentObj.getStudent();
// implementing the interface  
var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Employee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Employee.prototype.GetAge = function () {
        return this.age;
    };
    return Employee;
}());
// using the class that implements interface  
var myEmployee = new Employee('Abhishek', 'Mishra', 25);
console.log(myEmployee);
var fullName = myEmployee.FullName();
var Age = myEmployee.GetAge();
console.log("Name of Person: " + fullName + '\nAge: ' + Age);
