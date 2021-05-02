"use strict";
//1 a) 
function min(_arr) {
    let min = _arr[0];
    for (let i = 0; i < _arr.length; i++) {
        if (min > _arr[i]) {
            min = _arr[i];
        }
    }
    return min;
}
console.log(min([10, 3883, -334, 33, -2222]));
//b) 
let number1 = 50;
let number2 = 75;
function isEven(_num) {
    _num = Math.abs(_num);
    if (_num == 0) {
        return true;
    }
    if (_num == 1) {
        return false;
    }
    return isEven(_num - 2);
}
console.log(isEven(75));
//(K) bei -1 geht er immer weiter ins Negative und bleibt somit in der Unendlichschleife gefangen. 
//(c) 
class Student {
    constructor(_name, _vorname, _alter, _semester, _studiengang) {
        this.name = _name;
        this.vorname = _vorname;
        this.alter = _alter;
        this.semester = _semester;
        this.studiengang = _studiengang;
    }
    showInfo(_student) {
        console.log("Name: " + _student.name);
        console.log("Vorname: " + _student.vorname);
        console.log("Alter: " + _student.alter);
        console.log("Semester: " + _student.semester);
        console.log("Studiengang: " + _student.studiengang);
    }
}
let student1 = new Student("Renner", "Marcel", 24, 2, "OMB");
let student2 = new Student("Heinz", "Karl", 32, 7, "MIB");
let student3 = new Student("Müller", "Tom", 19, 1, "MKB");
let students = [student1, student2, student3];
students.push(new Student("Otto", "Mueller", 25, 4, "MKB"));
for (let i = 0; i < students.length; i++) {
    students[i].showInfo(students[i]);
}
//Aufgabe 2 
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
//console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
console.log(arr = split(arr, 0, 4));
console.log(arr);
console.log(split(arr, 1, 2));
//console.log(split(arr, 2, 0));     // Bonus c)
//console.log(split(arr, -1, 2));    // Bonus c)
//console.log(split(arr, 0, 7));     // Bonus c)
//a)
function backwards(_arr) {
    let tempArr = [];
    for (let i = _arr.length - 1; i >= 0; i--) {
        tempArr.push(_arr[i]);
    }
    return tempArr;
}
//b) 
function join(_arr1, _arr2) {
    let newArray = _arr1.concat(_arr2); //concat--> vorgegebene Java Methode
    console.log(newArray);
}
//c) 
function split(_array1, _index1, _index2) {
    return _array1.slice(_index1, _index2); //slice --> vorgegebene Java Methode
}
//Aufgabe 3 a)
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 10;
//Himmel + Wiese
context.fillStyle = "#00BFFF";
context.fillRect(0, 0, 500, 300); //x, y, witdh, height
context.fillStyle = "#00CD00";
context.fill();
context.fillRect(0, 300, 500, 100);
//Haus
context.fillStyle = "#FFDEAD";
context.fillRect(50, 200, 150, 120);
context.fillStyle = "#61380B";
context.fillRect(80, 260, 40, 60);
context.fillStyle = "#FFB90F";
context.fillRect(140, 230, 40, 30);
let pathTriangle = new Path2D();
pathTriangle.moveTo(50, 200);
pathTriangle.lineTo(125, 130);
pathTriangle.lineTo(200, 200);
pathTriangle.lineTo(50, 200);
pathTriangle.closePath();
context.fillStyle = "#FF4500";
context.fill(pathTriangle);
context.stroke(pathTriangle);
//Baum
context.fillStyle = "#8B5A2B";
context.fillRect(320, 260, 20, 80);
let pathTree = new Path2D();
pathTree.arc(330, 220, 50, 0, 2 * Math.PI);
context.fillStyle = "#228B22";
context.fill(pathTree);
context.strokeStyle = "#228B22";
context.stroke(pathTree);
//1. Wolke
let pathCloud = new Path2D();
pathCloud.arc(50, 40, 40, 0, 2 * Math.PI);
context.lineWidth = 3;
context.fillStyle = "#D8D8D8";
context.fill(pathCloud);
context.strokeStyle = "#585858";
context.stroke(pathCloud);
//2. Wolke
let pathCloud2 = new Path2D();
pathCloud2.arc(230, 100, 25, 0, 2 * Math.PI);
context.fill(pathCloud2);
context.stroke(pathCloud2);
//3. Wolke
let pathCloud4 = new Path2D();
pathCloud4.arc(400, 70, 50, 0, 2 * Math.PI);
context.fill(pathCloud4);
context.stroke(pathCloud4);
//Aufgabe 3b)
let canvas2 = document.getElementById("mySecondCanvas");
let context2 = canvas2.getContext("2d");
context2.lineWidth = 10;
//c) 
function createRect() {
    let rec = { xCoordinate: Math.floor(Math.random() * 501), yCoordinate: Math.floor(Math.random() * 501), width: Math.floor(Math.random() * 501), height: Math.floor(Math.random() * 501) };
    return rec;
}
//d) 
function drawRect(_rec) {
    context2.fillRect(_rec.xCoordinate, _rec.yCoordinate, _rec.width, _rec.height);
}
//e) 
let rectArray = [];
for (let i = 0; i < 5; i++) {
    rectArray.push(createRect());
    drawRect(rectArray[i]);
}
//# sourceMappingURL=script.js.map