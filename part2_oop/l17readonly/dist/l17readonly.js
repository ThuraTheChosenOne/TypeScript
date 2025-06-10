"use strict";
class Student {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    content() {
        console.log("Email is avaliable");
    }
}
const studentObj = new Student(1001, "Thura Naing", 21);
console.log(studentObj);
console.log(typeof studentObj);
console.log(studentObj.id);
console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.phone);
studentObj.content();
studentObj.phone = "7943";
console.log(studentObj.phone);
studentObj.name = "ko ko";
console.log(studentObj.name);
const stuObj = new Student(1002, "Naing Naing", 23, "98329479");
console.log(stuObj.phone);
