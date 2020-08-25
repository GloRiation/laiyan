//object.js

<-- declare using object literal -->

var Student = {
	name: "Ivan",
	roll_no: 45,
	group: 10

};

<-- declare using a new keyword -->

var Student = new object();

Student.name = "Rachel";
Student.group = 10;
Student.roll_no = 45;

<-- declare using object constructor -->

function Student(name, group, roll_no){
	this.name = name;
	this.group = group;
	this.rolll_no = roll_no;
}
var Student1 = new Student("Rachel", 10, 45);

<-- access using a dot operaor -->

