// unknown vs any

// Feature                 unknown                          any
// Type Safety             Safe                             Unsafe
// Assing to other types   Not allowed without checks       Allowed(even if wrong)

// => unknown type

let sayhi:unknown = "hello Sir";
let age:unknown = 12;
console.log(typeof sayhi);//string


// let getage:number = age;
// console.log(getage);//can't use unknown types


//exe 1
let getage:number = typeof age === "number" ? age : 20;
console.log(getage);//12


//exe 2
let phone:unknown = "09213123";
console.log(typeof phone);//string


let getphone:number = typeof phone === "number" ? phone : 110;
console.log(getphone);//110

//exe 3
let unknownval:unknown = "Hello";

unknownval = true;
unknownval = 20;

console.log(unknownval);//20


let getval:number = typeof unknownval === "number" ? unknownval : 0;
console.log(getval);//20


//--------------------------------------------------------------------------

// => any type

//exe 1
let fullname:any = "Kyaw Kyaw";
let nickname:number = fullname;

console.log(fullname);//Kyaw Kyaw


let firstname:any = "Hsu Hsu";
let lastname:unknown = firstname;

console.log(lastname);// Hsu

//exe 2
let anyval:any = "hello";

anyval = 20;
anyval = true;

console.log(anyval);//true

let getnum:number = anyval;
console.log(getnum);//true No error if it is not a number

//--------------------------------------------------------------------

// =>any with unknown

//Not Recomend
let brand:unknown = "Redbull";
let price:any = brand;

let fee:number = price; //beware :can use string is working in number
console.log(fee);//Redbull

//Recomend
let brandname:any = "Sponsor";
let ordinaryprice:unknown = brandname;

// let seeprice:number = ordinaryprice;// errror beware :can use string is not working in number
let saleprice:number = typeof ordinaryprice === "number" ? ordinaryprice : 0;
console.log(saleprice);//0


//--------------------------------------------------------------------------------------



// => unknown in Union (|) vs Intersection (&) types

// let productname:any|string = "Sponsor";//unknown|string not ok ,any|string is ok
// let companyname:string = productname;//error

// let productname:unknown|number = 1599;//unknown|number not ok ,any|number is ok
// let companyname:number = productname;//error

// let productname:unknown&string = "Sponsor";
// let companyname:string = productname;
// console.log(companyname);//Sponsor

// let productname:unknown&number = 1500;
// let companyname:number = productname;
// console.log(companyname);//1500

// let productname:unknown&string = 1500;
// let companyname:number = productname;
// console.log(companyname);//error because opsitive type


//----------------------------------------------------------------------------

