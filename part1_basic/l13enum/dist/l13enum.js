"use strict";
var ListFruits;
(function (ListFruits) {
    ListFruits[ListFruits["Apple"] = 0] = "Apple";
    ListFruits[ListFruits["Orange"] = 1] = "Orange";
    ListFruits[ListFruits["Banana"] = 2] = "Banana";
    ListFruits[ListFruits["Mango"] = 3] = "Mango";
    ListFruits[ListFruits["Tomato"] = 4] = "Tomato";
})(ListFruits || (ListFruits = {}));
console.log(ListFruits);
console.log(ListFruits.Apple);
console.log(ListFruits.Mango);
var ListNumbers;
(function (ListNumbers) {
    ListNumbers[ListNumbers["Apple"] = 10] = "Apple";
    ListNumbers[ListNumbers["Orange"] = 11] = "Orange";
    ListNumbers[ListNumbers["Banana"] = 12] = "Banana";
    ListNumbers[ListNumbers["Mango"] = 13] = "Mango";
    ListNumbers[ListNumbers["Tomato"] = 14] = "Tomato";
})(ListNumbers || (ListNumbers = {}));
let fruitnum1 = ListNumbers.Apple;
let fruitnum2 = ListNumbers.Orange;
let fruitnum3 = ListNumbers.Tomato;
console.log(fruitnum1);
console.log(fruitnum2);
console.log(fruitnum3);
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Unauthorized"] = 401] = "Unauthorized";
})(HttpCode || (HttpCode = {}));
console.log(HttpCode.OK);
console.log(HttpCode.BadRequest);
console.log(HttpCode.Unauthorized);
var StaffInfo;
(function (StaffInfo) {
    StaffInfo["Fullname"] = "Mandalay";
    StaffInfo["Position"] = "Manager";
})(StaffInfo || (StaffInfo = {}));
let staffname = StaffInfo.Fullname;
let staffposition = StaffInfo.Position;
console.log(staffname, staffposition);
var EmpolyerDetail;
(function (EmpolyerDetail) {
    EmpolyerDetail[EmpolyerDetail["ID"] = 1002] = "ID";
    EmpolyerDetail["Name"] = "Thura Naing";
    EmpolyerDetail[EmpolyerDetail["Salary"] = 9000000] = "Salary";
})(EmpolyerDetail || (EmpolyerDetail = {}));
let employeeid = EmpolyerDetail.ID;
let employeename = EmpolyerDetail.Name;
let employeesalary = EmpolyerDetail.Salary;
console.log(employeeid, employeename, employeesalary);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color[1]);
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 13] = "Medium";
    Size[Size["Large"] = 19] = "Large";
})(Size || (Size = {}));
console.log(Size[1]);
console.log(Size[19]);
var Colour;
(function (Colour) {
    Colour["Red"] = "Red";
    Colour["Green"] = "Green";
})(Colour || (Colour = {}));
(function (Colour) {
    Colour["Blue"] = "Blue";
    Colour["Yellow"] = "Yellow";
})(Colour || (Colour = {}));
console.log(Colour);
console.log(Colour.Green);
console.log(Colour.Blue);
var Direction;
(function (Direction) {
    Direction[Direction["Nourth"] = 0] = "Nourth";
    Direction[Direction["Sourth"] = 1] = "Sourth";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
function move(direct) {
    console.log("You are moving to : ", direct);
}
move(Direction.East);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Editor"] = "EDITOR";
    Role["User"] = "USER";
})(Role || (Role = {}));
function getrole(role) {
    console.log(`You are a ${role}`);
}
getrole(Role.User);
var CarEngine;
(function (CarEngine) {
    CarEngine[CarEngine["Stopped"] = 0] = "Stopped";
    CarEngine[CarEngine["Started"] = 1] = "Started";
})(CarEngine || (CarEngine = {}));
function isenginerun(status) {
    return status === CarEngine.Started;
}
console.log(isenginerun(CarEngine.Stopped));
console.log(isenginerun(CarEngine.Started));
