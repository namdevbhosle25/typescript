class Student{
    name:string;
    rollno:any;
    marks:number;
    contact:number;

    constructor(name:string,rollno:any,marks:number,contact:number){
        this.name =name;
        this.rollno =rollno
        this.marks =marks
        this.contact =contact
    }
    getStudent(){
       console.log(`${this.name} ${this.rollno} ${this.marks} ${this.contact}`);
        
    }
}
let studentObj = new Student('Namdev','#A12',75,976653060);
studentObj.getStudent();    