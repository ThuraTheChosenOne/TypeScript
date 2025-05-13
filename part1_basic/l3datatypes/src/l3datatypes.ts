let fullname:string = "yo su";
console.log(fullname);

let age:number = 25;
console.log(age);
//this is coment
let hascar:boolean = true;
console.log(hascar);

hascar = false;
console.log(hascar);

//Any types

let studentid;
studentid = 1001;
studentid = "1002";


//Array of string
let colorarrs:string[] = ["red","blue","green"];
console.log(colorarrs);


//Array of number
let numarrs:number[] = [10,20,30];
console.log(numarrs);

//Array of string & number
let mixarrs1: (string|number)[] =["red","blue",100,200];
console.log(mixarrs1);

//Array of string & number & boolean
let mixarrs2: (string|number|boolean)[] =[true,"red","blue",100,200,false];
console.log(mixarrs2);

//nested array of string 
let greetarrs:string[][] = [
    ["hi"],
    ["hello","hay"],
    ["hlainghlaing","moePhuy"]
];

console.log(greetarrs);

//Nested array of number 
let evenarrs:number[][] = [
    [2,4],
    [6,7,8],
    [2,34]
];

console.log(evenarrs);

//Nested array of number 
let infoarrs:(string|number|boolean)[][] = [
    ["aung aung",122],
    ["age",25],
    ["hobby","reading","sport"],
    ["hascar",false]
];

console.log(infoarrs);

//Tuple (fixed value or fixed length) which means number must be after string
const product:[string,number] = ["Redbull",2500];
console.log(product);
