"use strict";

function Student(name) {
    this.name = name;

    thisavgScore = (scoreArray) =>
    scoreArray.reduce((a,b) => a+b) / scoreArray.length;
}

var heidi = new Student("Heidi");
var ralf = new Student("Ralf");

console.log("The avgScore for each student: ");
console.log("Heidi: ", heidi.avgScore([64, 78, 59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

console.log("\nWhat do the Student objects contain?: ");
console.log("Heidi: ", heidi);
console.log("Ralf: ", ralf);

function StudentProto(name){
    this.name = name;

    StudentProto.prototype.avgScore = (scoreArray) =>
    scoreArray.reduce((a,b)=> a+b)/scoreArray.length;
}

heidi = new StudentProto("Heidi");
ralf = new StudentProto("Ralf");

console.log("\nThe avgScore for each student (proto): ");
console.log("Heidi: ", heidi.avgScore([64, 78, 59]));
console.log("Ralf: ", ralf.avgScore([85, 70, 67]));

