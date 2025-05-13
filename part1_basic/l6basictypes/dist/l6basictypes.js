"use strict";
let country;
console.log(country);
let brandname = "";
let phone = (brand) => {
    brandname = brand;
};
console.log(phone("iPhone"));
console.log(brandname);
let points;
function userpoints(cashdown) {
    if (cashdown) {
        return points = 100;
    }
    else {
        return points = 0;
    }
}
let user1 = userpoints(true);
let user2 = userpoints(false);
console.log(user1);
console.log(user2);
let age1 = undefined;
let age5 = null;
let age6 = 25;
let age7 = "Hey";
console.log(age1);
console.log(age5);
console.log(age6);
console.log(age7);
let cashback = 1000;
cashback = 500;
console.log(cashback);
let cashreturn = 300;
console.log(cashreturn);
const price = 500;
console.log(price);
const itemprice = 500;
console.log(itemprice);
const newcourse = "video";
console.log(newcourse);
const student = {
    name: "Aung aung",
    gender: "male",
    age: 25
};
console.log(student);
let numberarrs = [10, [20, [30, 40]]];
console.log(numberarrs);
const officestaff = {
    id: 1001,
    name: "Ko Ko",
    department: "Accounting"
};
console.log(officestaff);
console.log(typeof officestaff);
const newstaff = JSON.stringify(officestaff);
console.log(newstaff);
console.log(typeof newstaff);
function staffinfo(newstaffjson) {
    return JSON.parse(newstaffjson);
}
console.log(staffinfo(newstaff));
console.log(staffinfo(newstaff).id);
console.log(staffinfo(newstaff).name);
console.log(staffinfo(newstaff).department);
let luckynumber = "777";
console.log(luckynumber);
function userinfo(name, age) {
    console.log(`My name is ${name}.I am ${age} years old`);
}
userinfo("Kyaw Gyi", "25");
function getinput(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val * 2;
    }
}
;
console.log(getinput("hi"));
console.log(getinput(20));
let dinner = (amount, servicefee) => {
    if (typeof servicefee === "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(dinner(3000, 500));
console.log(dinner(3000, "200"));
console.log(dinner(3000, "100 USD"));
let lunch = (amount, servicefee) => {
    if (typeof servicefee === "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(lunch(3000, 500));
console.log(lunch(3000, "200"));
console.log(lunch(3000, "100 USD"));
const desktop = {
    brandname: "MSI",
    price: 499,
    cpu: "Ryzen5 5625u",
    coolingfun: true
};
console.log(desktop);
const laptop = {
    brandname: "DELL",
    price: 500,
    cpu: "Ryzen5 5625u",
};
laptop.cpu = "Corei9";
console.log(laptop);
const newperson = {
    name: "Kyaw Kyaw",
    age: 30,
    uid: 1001,
    department: "IT"
};
console.log(newperson);
function printpersoninfo(obj) {
    console.log(`ID is ${obj.uid}, Age is ${obj.age},Department is ${obj.department}`);
}
printpersoninfo(newperson);
const nextjsclass = {
    id: 1002,
    title: "Next JS Batch 1",
    price: 80000,
    type: "Zoom Class",
    content() {
    },
    cloudprovide() {
    },
    paymentgetaway() {
    },
};
console.log(nextjsclass);
function greet(name, age = 19) {
    return `Hello, my name is ${name} and i am ${age} years old`;
}
console.log(greet("Thura"));
console.log(greet("Thura", 21));
function greeting(name, age) {
    if (age !== undefined) {
        return `Hello, my name is ${name} and i am ${age} years old`;
    }
    else {
        return `Hello, my name is ${name}`;
    }
}
console.log(greeting("Nyi yi", 12));
console.log(greeting("Noung"));
let sayhi;
sayhi = (msg) => {
    return msg;
};
console.log(sayhi("Mingalar Par"));
let sayhello;
sayhello = (msg, name, content = "What are you doing") => {
    if (name !== undefined) {
        return `Hello ${msg}!,${name}.${content}`;
    }
    else {
        return `Hello ${msg}!.${content}`;
    }
};
console.log(sayhello("Mingalar pr", "Ko Ko", "How are you doing"));
console.log(sayhello("Mingalar pr"));
const vipcu = {
    name: "U Hla",
    phone: "094323",
    address: {
        street: "14th street",
        city: "Mandalay",
        country: "Myanmar"
    }
};
console.log(vipcu);
function employer(owner) {
    return owner.fullname;
}
console.log(employer({ fullname: "Mon Mon" }));
function lawyer({ fullname }) {
    return fullname;
}
console.log(lawyer({ fullname: "Kaung Mon" }));
console.log(typeof "Hello Sir");
console.log(typeof 129);
const Animal = {
    name: "Panda",
    age: 8
};
let petone = {
    age: 10,
    name: "Cute Cat"
};
console.log(petone);
