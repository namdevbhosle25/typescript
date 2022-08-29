// Simple message

var msg = "hello typeScript world!";
console.log(msg);

// Data Types
var a;
a = 10;
console.log(a);
var username;
username = "Namdev Bhosle";
console.log(username);
var isGraduated;
isGraduated = true;
console.log(isGraduated);
var students;
students = ["Namdev", "Omkar", "Govinda", "Komal", "Vnita"];
console.log(students);
var marks;
marks = [90, 60, 60, 95, 80];
console.log(marks);

// Tuple (It is a collection of different data type elements)
var mytuples = [01, "Ram", "Nanded", 966856856];
console.log(mytuples);
var mytuples2 = ["Namdev", "Nanded", "isGraduated", 9766153060];
console.log(mytuples2);
var user; // declare tuple variable
user = [1, "Ramarao reddy", true, 20, "Admin"]; // initialize tuple variable
console.log(user);

// Union (TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.)
var code;
code = "#01";
//code = 123;
console.log(code);
var empId;
empId = "#emp01";
//empId = 111;
console.log(empId);

// Optional Parameter function (p1,p2?,p3?)
var add = function (n1, n2, n3) {
    console.log(n1 + 40);
};
add(10);

// Default Parameter function (p1,p2=value)
var addtwo = function (n1, n2) {
    if (n2 === void 0) { n2 = 10; }
    console.log(n1 + n2);
};
addtwo(20);
