"use strict";
function city(val) {
    return `Hello ${val}`;
}
console.log(city("Yangon"));
function cal(num1, num2) {
    return num1 + num2;
}
console.log(cal(1, 2));
function car(brand, qty, tax) {
    let price = 0;
    if (brand == "toyota")
        price = 3000;
    if (brand == "mazda")
        price = 2000;
    if (brand == "suzuki")
        price = 1000;
    let total = (price * qty) + tax;
    return total;
}
console.log(car("toyota", 1, 100));
console.log(car("suzuki", 2, 200));
let truck = (brand, qty, tax, discount) => {
    let price = 0;
    let result = 0;
    if (brand == "toyota")
        price = 3000;
    if (brand == "mazda")
        price = 2000;
    if (brand == "suzuki")
        price = 1000;
    let total = (price * qty) + tax + result;
    return total;
};
console.log(truck("toyota", 1, 100, 10));
console.log(truck("mazda", 2, 200, 10));
