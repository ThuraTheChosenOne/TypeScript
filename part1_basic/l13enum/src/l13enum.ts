//=> Enum

// Numeric Enum(default , aut-increment from 0)
// String Enum
// Reverse Mapping (only works with numeric enums)

// PascalCase

// camelCase
// snake_case

 enum ListFruits{
    Apple,
    Orange,
    Banana,
    Mango,
    Tomato
}

console.log(ListFruits);//{ if you want to direct print ! "const cant use"
//     '0': 'Apple',
//     '1': 'Orange',
//     '2': 'Banana',
//     '3': 'Mango',
//     '4': 'Tomato',
//     Apple: 0,
//     Orange: 1,
//     Banana: 2,
//     Mango: 3,
//     Tomato: 4
//   }

console.log(ListFruits.Apple);//0
console.log(ListFruits.Mango);//3

//let , var can't in enum
enum ListNumbers{
    Apple = 10,
    Orange,
    Banana,
    Mango,
    Tomato
}
let fruitnum1:ListNumbers = ListNumbers.Apple;
let fruitnum2:ListNumbers = ListNumbers.Orange;
let fruitnum3:ListNumbers = ListNumbers.Tomato;

console.log(fruitnum1);//10
console.log(fruitnum2);//11
console.log(fruitnum3);//14


enum HttpCode{
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401
}


console.log(HttpCode.OK);//200
console.log(HttpCode.BadRequest);//400
console.log(HttpCode.Unauthorized);//401


enum StaffInfo{
    Fullname = "Mandalay",
    Position = "Manager"
}

let staffname:StaffInfo = StaffInfo.Fullname;
let staffposition:StaffInfo = StaffInfo.Position;

console.log(staffname,staffposition);//Mandalay Manager


enum EmpolyerDetail{
    ID = 1002,
    Name = "Thura Naing",
    Salary = 9000000
}


let employeeid:EmpolyerDetail = EmpolyerDetail.ID;
let employeename:EmpolyerDetail = EmpolyerDetail.Name;
let employeesalary:EmpolyerDetail = EmpolyerDetail.Salary;
console.log(employeeid,employeename,employeesalary);//1002 Thura Naing 9000000


//Reverse Mapping (only works with numeric enums)

enum Color{
    Red = 1,
    Green,
    Blue

}


console.log(Color[1]);// Red index pay p value pyan ya

enum Size{
    Small = 10,
    Medium = 13,
    Large = 19
}

console.log(Size[1]);//undefined
console.log(Size[19]);//Large



//=>Enum Merging , Ambient Enum

enum Colour{
    Red = "Red",
    Green = "Green"
}

enum Colour{
    Blue = "Blue",
    Yellow = "Yellow"
}

console.log(Colour);//{ Red: 'Red', Green: 'Green', Blue: 'Blue', Yellow: 'Yellow' }
console.log(Colour.Green);//Green
console.log(Colour.Blue);//Blue


//=>With Function

enum Direction{
    Nourth,
    Sourth,
    East,
    West
}

function move(direct:Direction){
    console.log("You are moving to : " ,direct);
}

move(Direction.East);//You are moving to :  2

enum Role{
    Admin = "ADMIN",
    Editor = "EDITOR",
    User = "USER"
}

function getrole(role:Role){
    console.log(`You are a ${role}`);
}

getrole(Role.User);//You are a USER

enum CarEngine{
    Stopped,
    Started
}

function isenginerun(status:CarEngine):boolean{
    return status === CarEngine.Started;

}

console.log(isenginerun(CarEngine.Stopped));//false
console.log(isenginerun(CarEngine.Started));//true

// node l13enum.js