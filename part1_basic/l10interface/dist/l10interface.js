"use strict";
;
function application(id, name, hobbies) {
    return {
        id: id,
        name: name,
        hobbies: hobbies
    };
}
let result = application(1001, "Thura Naing", ["reading", "writing"]);
console.log(result);
function applicant(id, name, hobbies) {
    return {
        id: id,
        name: name,
        hobbies: hobbies
    };
}
let result2 = applicant(1001, "Thura KO", ["fapping", "writing"]);
console.log(result2);
function cvform(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return this.hobbies;
        }
    };
}
const result3 = cvform(1003, "Kyaw Kyaw", ["reading", "playing"]);
console.log(result3);
function getinfo(id, name, hobbies) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return result4.hobbies;
        }
    };
}
const result4 = getinfo(1023, "Htun Kyaw", ["eating", "playing"]);
console.log(result4);
console.log(result4.gethobbies());
function personalinfo(id, name, hobbies, tasks) {
    return {
        id,
        name,
        hobbies,
        gethobbies() {
            return this.hobbies;
        },
        tasks
    };
}
const result5 = personalinfo(23, "Mya Yin", ["eating", "playing"], ["print", "report"]);
console.log(result5);
const productinfo = {
    brand: "iPhone",
    price: 2500.89,
    packing: "can",
    stock: 34
};
console.log(productinfo);
