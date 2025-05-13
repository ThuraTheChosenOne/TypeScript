//=>Basic Types


//=>Void Type
let country:void;
console.log(country);// undefined

let brandname:string = "";
let phone = (brand:string):void=>{
    brandname = brand;
}

console.log(phone("iPhone"));// undefined (because the function is void)
console.log(brandname);//iPhone


let points:number;

function userpoints(cashdown:boolean):number{
    if(cashdown){
        return points = 100;
    }else{
        return points = 0;
    }
}

let user1 = userpoints(true);
let user2 = userpoints(false);
// let user3 = userpoints(null);//"strictNullChecks": false
// let user4 = userpoints(undefined);//"strictNullChecks": false

console.log(user1);//100
console.log(user2);//0

// console.log(user3);//0"strictNullChecks": false
// console.log(user4);//0"strictNullChecks": false

let age1:undefined = undefined;
// let age2:undefined = null;//error becasue of strictNullcheck false
// let age3:undefined = 25;//error
// let age4:undefined = "Hay";//error

let age5:undefined | null = null;//which means it can be both null or undefined
let age6:undefined | number = 25;
let age7:undefined | string = "Hey";

console.log(age1);//undefined
// console.log(age2);//
console.log(age5);//null
console.log(age6);//25
console.log(age7);//Hey




// ====Type Aliases

let cashback:number = 1000;
cashback = 500;
console.log(cashback);//500


type Promotion = number;// Note this is not value !It's just type(which kinda make data types)we can call literal type  
let cashreturn:Promotion = 300;
console.log(cashreturn);//300


const price:300 | 500 | 700 = 500;//in this case the input must be 300 500 700 cause its type now
console.log(price);

type FixedPrice = 300 | 500 | 700;//Note:we can call literal type
const itemprice:FixedPrice = 500;
console.log(itemprice);//500

type DLTClasstype = "zoom" | "video";
const newcourse:DLTClasstype = "video";
console.log(newcourse);//video

type PersonInfo = {
    name:string,
    gender:string,
    age:number
}

const student:PersonInfo={
    name:"Aung aung",
    gender:"male",
    age:25
}

// student.hascar = false;//error
console.log(student);//{ name: 'Aung aung', gender: 'male', age: 25 }


//=====Rescurvie type

type NestedArray = number | NestedArray[];//which means nestedarrray ka number le hok tl array le hok tl
// let numberarrs:NestedArray = [10,20];
// let numberarrs:NestedArray = [10,[20]];
let numberarrs:NestedArray = [10,[20,[30,40]]];
console.log(numberarrs);




//====Type Assertion

type Employee = {
    id:number,
    name:string,
    department:string
}

const officestaff:Employee = {
    id:1001,
    name:"Ko Ko",
    department:"Accounting"
};
console.log(officestaff);//{ id: 1001, name: 'Ko Ko', department: 'Accounting' }
console.log(typeof officestaff);//object


const newstaff = JSON.stringify(officestaff);
console.log(newstaff);//{"id":1001,"name":"Ko Ko","department":"Accounting"}
console.log(typeof newstaff);//string

                                    //above ka employee format a tai output
function staffinfo(newstaffjson:string):Employee{
    // return JSON.parse(newstaffjson);//convert to Json format

    //Old Method
    // return(<Employee>JSON.parse(newstaffjson));

    //New Method
    return (JSON.parse(newstaffjson) as Employee);
}

console.log(staffinfo(newstaff));//{ id: 1001, name: 'Ko Ko', department: 'Accounting' }
console.log(staffinfo(newstaff).id);//1001
console.log(staffinfo(newstaff).name);//ko ko
console.log(staffinfo(newstaff).department);//accounting




//====Union Type

let luckynumber:number |string = "777";//number cant start 0
console.log(luckynumber);

//====Union Type in function

function userinfo(name:string,age:number|string){
    console.log(`My name is ${name}.I am ${age} years old`);
}

userinfo("Kyaw Gyi","25");



//===Exercis , Type Guards
function getinput(val:string|number){
    if(typeof val === "string"){
        return val.toUpperCase();
    }else{
        return val * 2;
    }
};

console.log(getinput("hi"));//HI
console.log(getinput(20));//40


let dinner = (amount:number,servicefee:string|number):number =>{
    if(typeof servicefee === "number"){
        return amount + servicefee;
    }else{
        return amount + parseInt(servicefee);
    }
};

console.log(dinner(3000,500));//3500
console.log(dinner(3000,"200"));//3200
console.log(dinner(3000,"100 USD"));//3100
// console.log(dinner(3000,"USD 200"));//Nan


let lunch = (amount:number,servicefee:string|100|300|500):number =>{
    if(typeof servicefee === "number"){
        return amount + servicefee;
    }else{
        return amount + parseInt(servicefee);
    }
};

console.log(lunch(3000,500));//3500
console.log(lunch(3000,"200"));//3200
// console.log(lunch(3000,200));//error
// console.log(lunch(3000,502));//error

console.log(lunch(3000,"100 USD"));//3100
// console.log(lunch(3000,"USD 200"));//Nan

//====Object Type with Option (?)

type ComputerUnit = {
    readonly brandname:string,//readonly which means we can override
    price:number,
    cpu:string,
    coolingfun?:boolean
}

const desktop:ComputerUnit = {
    brandname:"MSI",
    price:499,
    cpu:"Ryzen5 5625u",
    coolingfun: true
}

console.log(desktop);//{ brandname: 'MSI', price: 499, cpu: 'Ryzen5 5625u', coolingfun: true }

const laptop:ComputerUnit = {
    brandname:"DELL",
    price:500,
    cpu:"Ryzen5 5625u",
    // coolingfun: true ma pr le ya tl because of (?)
}


// laptop.brandname = "Lenovo";
laptop.cpu = "Corei9";
console.log(laptop);//{ brandname: 'DELL', price: 500, cpu: 'Ryzen5 5625u' }


//==== Intersection Types (&)

// exe1
type Person = {
   name:string;
   age:number;


};

type Staff = {
    uid:number;
    department:string;
};

type StaffPerson = Person & Staff;

const newperson:StaffPerson = {
    name:"Kyaw Kyaw",
    age:30,
    uid:1001,
    department:"IT"
    

}

console.log(newperson);//{ name: 'Kyaw Kyaw', age: 30, uid: 1001, department: 'IT' }

//ex2
function printpersoninfo(obj:StaffPerson){
    console.log(`ID is ${obj.uid}, Age is ${obj.age},Department is ${obj.department}`);
}

printpersoninfo(newperson);//ID is 1001, Age is 30,Department is IT

//ex3

type Article = {
    id:number;
    title:string;
    price:number;
    type:string;
}

type ArticleDescription = {
    content():void;
}

type ArticelVideoRecord = {
    cloudprovide():void;
}

type Articlepayment = {
    paymentgetaway():void;
}

type NewArticle = Article & ArticleDescription & ArticelVideoRecord & Articlepayment;

const nextjsclass:NewArticle = {
    id:1002,
    title:"Next JS Batch 1",
    price: 80000,
    type:"Zoom Class",

    content() {
        
    },
    cloudprovide() {
        
    },
    paymentgetaway() {
        
    },
}

console.log(nextjsclass);
//{
//     id: 1002,
//     title: 'Next JS Batch 1',
//     price: 80000,
//     type: 'Zoom Class',
//     content: [Function: content],
//     cloudprovide: [Function: cloudprovide],
//     paymentgetaway: [Function: paymentgetaway]      
//   }


//==== Function Type , Default Parameter(=value) , Optional Parameter (?)


//ex1(Deault Parameter)

function greet(name:string,age:number=19){
    return  `Hello, my name is ${name} and i am ${age} years old`;
}

console.log(greet("Thura"));//Hello, my name is Thura and i am 19 years old  
console.log(greet("Thura",21));//Hello, my name is Thura and i am 21 years old


//ex2(Optional Parameter)
function greeting(name:string,age?:number):string{

    if(age !== undefined){
        return `Hello, my name is ${name} and i am ${age} years old`;
    }else{
        return  `Hello, my name is ${name}`;
    }
   
}

console.log(greeting("Nyi yi",12));//Hello, my name is Nyi yi and i am 12 years old    
console.log(greeting("Noung"));//Hello, my name is Noung

//ex3(i)

let sayhi:Function;

sayhi = (msg:string):string=>{
    return msg;
}

console.log(sayhi("Mingalar Par"));//mingalar pr

//ex3(ii)


let sayhello: (msg:string,name?:string,content?:string)=>string;

sayhello = (msg,name,content="What are you doing")=>{

    if(name !== undefined){
        return `Hello ${msg}!,${name}.${content}`;
    }else{
        return `Hello ${msg}!.${content}`;
    }

};

console.log(sayhello("Mingalar pr","Ko Ko","How are you doing"));//Hello Mingalar pr!,Ko Ko.How are you doing   
console.log(sayhello("Mingalar pr"));//Hello Mingalar pr!,What are you doing?

//=====Nested Object Type

type Address = {
    street:string;
    city:string;
    country:string;
};

type Customer = {
    name:string;
    phone:string;
    address:Address;// Nested object type
};

const vipcu:Customer = {
    name:"U Hla",
    phone:"094323",
    address:{
        street:"14th street",
        city:"Mandalay",
        country:"Myanmar"
    }
};

console.log(vipcu);//{
//     name: 'U Hla',
//     phone: '094323',
//     address: { street: '14th street', city: 'Mandalay', country: 'Myanmar' }
//   }

//=====Literal Object Type

function employer(owner:{fullname:string}):string{
    return owner.fullname;
}
console.log(employer({fullname:"Mon Mon"}));//Mon Mon

//=====Literal Object Type(Destructuring)

function lawyer({fullname}:{fullname:string}):string{
    return fullname;
}
console.log(lawyer({fullname:"Kaung Mon"}));//Kaung Mon


//======typeof in "in typescript typequery"

console.log(typeof "Hello Sir");//string
console.log(typeof 129);//number

const Animal = {
    name:"Panda",
    age:8
}

type Pet = typeof Animal;

let petone:Pet = {
    age:10,
    name:"Cute Cat"

};
console.log(petone);//{ age: 10, name: 'Cute Cat' }