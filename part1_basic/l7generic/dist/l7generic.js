"use strict";
let colorregarrs = ["red", "blue"];
let numberregarrs = [12, 243, 34];
let mixregarrs = [100, 200, 300, "aung aung", true];
let greetregarrs = [["hi"], ["hello"], ["what's"]];
let evennumregarrs = [[12, 234], [23]];
let inforegarrs = [["aung aung"], ["age"], ["hobby"], ["reading"]];
const productdetails = ["Redbull", 2000];
let numbers = [1, 2, [2, [32, 4, [34]]]];
let colorgenarrs = ["red", "green", "blue"];
console.log(colorgenarrs);
let numggenarrs = [12, 23, 4];
let boolgenarrs = [true, false];
console.log(boolgenarrs);
let mingenarrs = ["red", "green", 23, false];
console.log(mingenarrs);
let evengenarrs = [[2, 4], [6, 8], [10, 12]];
console.log(evengenarrs);
let mixgenarrs = [["name", "aung aung"], ["hascar", true], ["age", 12]];
console.log(mixgenarrs);
function genfunone(value) {
    return value;
}
console.log(genfunone("Helo"));
console.log(genfunone("Helo"));
console.log(genfunone(1500));
console.log(genfunone(1500));
console.log(genfunone(true));
console.log(genfunone(false));
function genfuntwo(arrs) {
    return arrs[0];
}
console.log(genfuntwo(["red", "green", "blue"]));
console.log(genfuntwo([10, 20, 30]));
function genfunthree(val) {
    return val[2];
}
let strresult = genfunthree(["aung aung", "maung maung", "Chaw Chaw"]);
console.log(strresult);
let numresult = genfunthree([12, 45, 45]);
console.log(numresult);
let boolresult = genfunthree([true, false, true]);
console.log(boolresult);
function genfunfour(val1, val2) {
    return [val1, val2];
}
console.log(genfunfour("Hsu Hsu", 28));
console.log(genfunfour("Hsu Hsu", true));
function genfunfive(value) {
    return value;
}
console.log(genfunfive(12));
console.log(genfunfive(""));
console.log(genfunfive("Hello"));
console.log(typeof genfunfive(100));
console.log(genfunfive(true));
console.log(typeof genfunfive(true));
const Article = {
    title: 'Article 1',
    content: 'This is the story of article',
    price: '20 USD'
};
const Post = {
    title: 2,
    content: 2,
    price: 20
};
console.log(Article);
const item = {
    name: 'redbull',
    price: 20
};
console.log(item);
const item2 = {
    name: "Sponser",
    price: "Foc"
};
console.log(item2);
const student = {
    name: "Thura Naing",
    gender: "Male",
    age: 21
};
let myset = new Set([10, 20, 30, 10, 20]);
console.log(myset);
console.log(myset.size);
console.log(myset.has(70));
console.log(myset.has(20));
let numberset = new Set([1, 2, 4]);
console.log(numberset);
let nameset = new Set(['aung aung', 'mg mg']);
console.log(nameset);
let mixeddata = new Set(["Thura", 12, false, "naing"]);
console.log(mixeddata);
const numset = new Set([]);
numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);
numset.add(3);
console.log(numset);
console.log(numset.has(2));
numset.delete(4);
console.log(numset);
numset.clear();
console.log(numset);
const colorset = new Set(["red", "green", "blue"]);
for (let color of colorset) {
    console.log(color);
}
colorset.forEach(color => {
    console.log(color);
});
const userset = new Set([
    { id: 1, name: "aung naing", age: 23 },
    { id: 2, name: "Khant naing", age: 13 },
    { id: 3, name: "Khant Kyaw", age: 13 }
]);
userset.add({ id: 4, name: "Maung naing", age: 43 });
console.log(userset);
const shop = {
    name: "Apple Store",
    city: "Mandalay"
};
let store = {
    name: "Cherry Store",
    city: "Mandalay"
};
console.log(store);
function getshopinfo(obj, info) {
    return obj[info];
}
let shopname = getshopinfo(store, "name");
console.log(shopname);
let shopcity = getshopinfo(store, "city");
console.log(shopcity);
