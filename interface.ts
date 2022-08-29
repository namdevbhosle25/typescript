interface College {
  collegeName: string;
  getCollegeName(): string;
}

class Student implements College {
  name: string;
  rollno: any;
  marks: number;
  contact: number;

  constructor(name: string, rollno: any, marks: number, contact: number) {
    this.name = name;
    this.rollno = rollno;
    this.marks = marks;
    this.contact = contact;
  }
  collegeName: string;
  getCollegeName(): string {
    throw new Error("Method not implemented.");
  }

  getStudent() {
    console.log(`${this.name} ${this.rollno} ${this.marks} ${this.contact}`);
  }
}
let studentObj = new Student("Namdev", "#A12", 75, 976653060);
studentObj.getStudent();

// New interface

// defining interface for class
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  FullName();
  GetAge();
}
// implementing the interface
class Employee implements Person {
  firstName: string;
  lastName: string;
  age: number;
  FullName() {
    return this.firstName + " " + this.lastName;
  }
  GetAge() {
    return this.age;
  }
  constructor(firstN: string, lastN: string, getAge: number) {
    this.firstName = firstN;
    this.lastName = lastN;
    this.age = getAge;
  }
}
// using the class that implements interface
let myEmployee = new Employee("Abhishek", "Mishra", 25);
console.log(myEmployee);

let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log("Name of Person: " + fullName + "\nAge: " + Age);
