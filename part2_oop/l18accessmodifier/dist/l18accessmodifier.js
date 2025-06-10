"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    content() {
        console.log("Phone is avaliable");
    }
}
const userObj = new User("Kyaw Kyaw");
console.log(userObj.name);
userObj.name = "ko ko";
console.log(userObj.name);
console.log(userObj.content());
class People {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends People {
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
const employeeObj = new Employee("thinzar");
employeeObj.greeting();
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    showbalance() {
        console.log(`Main Balace is = ${this.balance}`);
    }
}
const bankObj = new BankAccount(2400);
bankObj.showbalance();
class Student {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    content() {
        console.log("Email is avaliable");
    }
    getage() {
        return this.age;
    }
    getphone() {
        return this.phone;
    }
}
const studentObj = new Student(1001, "hu hu", 15);
studentObj.name = "hsu hsu";
console.log(studentObj.name);
studentObj.content();
console.log(studentObj.getage());
const studentObj2 = new Student(10003, "yun yun", 43, "09123123");
console.log(studentObj2.getphone());
