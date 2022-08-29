// Simple message

let msg = "hello typeScript world!";
console.log(msg);

// Data Types

let a: number;
a = 10;
console.log(a);

let username: string;
username = "Namdev Bhosle";
console.log(username);

let isGraduated: boolean;
isGraduated = true;
console.log(isGraduated);

let students: string[];
students = ["Namdev", "Omkar", "Govinda", "Komal", "Vnita"];
console.log(students);

let marks: number[];
marks = [90, 60, 60, 95, 80];
console.log(marks);

// Tuple (It is a collection of different data type elements)

let mytuples = [01, "Ram", "Nanded", 966856856];
console.log(mytuples);

let mytuples2 = ["Namdev", "Nanded", "isGraduated", 9766153060];
console.log(mytuples2);

let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Ramarao reddy", true, 20, "Admin"]; // initialize tuple variable
console.log(user);

// Union (TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.)

let code: string | number | boolean;
code = "#01";
//code = 123;
console.log(code);

let empId: string | number | boolean;
empId = "#emp01";
//empId = 111;
console.log(empId);

// Optional Parameter function (p1,p2?,p3?)

var add = (n1: number, n2?: number, n3?: number) => {
  console.log(n1 + 40);
};
add(10);

// Default Parameter function (p1,p2=value)

let addtwo = (n1: number, n2: number = 10) => {
  console.log(n1 + n2);
};
addtwo(20);


// Strickly Typing

let rollno:number
let studentName:string
let MobileNo: number
let hobbies:string[]
let isPass:boolean
let studentObject:{}

// Any type of Datatype

let firstName:any

firstName=123; // datatype:number
firstName='Namdev Bhosle' // datatype:string
firstName=true // datatype:boolean
firstName=[12,20,10,25,30,21] // datatype:array
