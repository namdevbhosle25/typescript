var Student = /** @class */ (function () {
    function Student(name, rollno, marks, contact) {
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        this.contact = contact;
    }
    Student.prototype.getStudent = function () {
        console.log("".concat(this.name, " ").concat(this.rollno, " ").concat(this.marks, " ").concat(this.contact));
    };
    return Student;
}());
var studentObj = new Student('Namdev', '#A12', 75, 976653060);
studentObj.getStudent();
