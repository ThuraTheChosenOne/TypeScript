//=======Regular Array

let colorregarrs:string[] = ["red","blue"];
let numberregarrs:number[] = [12,243,34];
let mixregarrs:(string|number|boolean)[] = [100,200,300,"aung aung",true];

// nest string Array
let greetregarrs:string[][] = [["hi"],["hello"],["what's"]];

// nest number Array
let evennumregarrs:number[][] = [[12,234],[23]];

// nest string,number,boolean Array
let inforegarrs:(string|number|boolean)[][] = [["aung aung"],["age"],["hobby"],["reading"]]


//====Fixed vlaue
const productdetails:[string,number] = ["Redbull",2000];

type NestedArray = number | NestedArray[];
let numbers:NestedArray = [1,2,[2,[32,4,[34]]]];//Infinity Nested



//=======GENERIC ARRAY
//Array Notation => T[]
//Generic Array Type => Array<T>
let colorgenarrs:Array<string> = ["red","green","blue"];
console.log(colorgenarrs);//[ 'red', 'green' ]

let numggenarrs:Array<number> = [12,23,4];

let boolgenarrs:Array<boolean> = [true,false];
console.log(boolgenarrs);//[ true, false ]

let mingenarrs:Array<string|number|boolean> = ["red","green",23,false];
console.log(mingenarrs);//[ 'red', 'green', 23, false ]




///==========Nested number type array

let evengenarrs:Array<Array<number>> = [[2,4],[6,8],[10,12]];
console.log(evengenarrs);


///==========Nested number,string,boolean type array

let mixgenarrs:Array<Array<number|string|boolean>> = [["name","aung aung"],["hascar",true],["age",12]];
console.log(mixgenarrs);

//====Generic Function For array

// function funname<T>(parameter:T):T{
    // return parameter;
// }

//<T> si a type parameter that acts as a placeholder
//T is used as the type for the function parameter and return type
//Following functions works for any types, such as number,string or boolean


//second T and third T mean it depend on input data type


//exe1
function genfunone<T>(value:T){
    return value;
}

console.log(genfunone("Helo"));//helo ,T is string
console.log(genfunone<string>("Helo"));
console.log(genfunone(1500));//1500 T is number
console.log(genfunone<number>(1500));
console.log(genfunone(true));//true
console.log(genfunone<boolean>(false));

//exe2
function genfuntwo<T>(arrs:T[]):T{
    return arrs[0];
}

console.log(genfuntwo(["red","green","blue"]));//red
console.log(genfuntwo([10,20,30]));//10



//exe3
//generic array in generic function
function genfunthree<T>(val:Array<T>):T{
    return val[2];
}

let strresult = genfunthree<string>(["aung aung","maung maung","Chaw Chaw"]);
console.log(strresult);//chaw chaw

let numresult = genfunthree<number>([12,45,45]);
console.log(numresult);//45


let boolresult = genfunthree<boolean>([true,false,true]);
console.log(boolresult);//true



//Function with two generic types
//in this case T1 mean string and T2 mean number
function genfunfour<T1,T2>(val1:T1,val2:T2):[T1,T2]{
    return [val1,val2];
}

console.log(genfunfour<string,number>("Hsu Hsu",28));// ['Hsu Hsu',28]
console.log(genfunfour<string,boolean>("Hsu Hsu",true));// ['Hsu Hsu',true]


//===defaul t type for generic function
function genfunfive<T = string>(value:T):T{
    return value;
}

console.log(genfunfive(12));//12 will override the value
console.log(genfunfive(""));//it will be default string
console.log(genfunfive("Hello"));
console.log(typeof genfunfive(100));//number
console.log(genfunfive(true));
console.log(typeof genfunfive(true));


//===Generic Object Type

// syntax

// type ObjectType<T> = {
//     key1:T,
// };

type Book<T> = {
    title:T;
    content:T;
    price:T;
};
//in this case above T will be string
const Article:Book<string>={
    title:'Article 1',
    content:'This is the story of article',
    price:'20 USD'
};

const Post:Book<number>={
    title:2,
    content:2,
    price:20
};

console.log(Article);

//===Generic Object With multiple properties
// syntax

// type ObjectType<T1,T2> = {
//     first:T1,
//     second:T2
// };

type Product<T1,T2> = {
    name:T1;
    price:T2;
};

const item:Product<string,number> = {
    name:'redbull',
    price:20
}
console.log(item);

const item2:Product<string,string> = {
    name:"Sponser",
    price:"Foc"
}

console.log(item2);
type Person = {
    name:string;
    gender:string;
    age:number;
};

const student:Person = {
    name:"Thura Naing",
    gender:"Male",
    age:21
}


//===Generic Set

let myset = new Set([10,20,30,10,20]);

console.log(myset);//Set(3) { 10, 20, 30 }
console.log(myset.size);//3

console.log(myset.has(70));//false
console.log(myset.has(20));//true

let numberset:Set<number> = new Set([1,2,4]);
console.log(numberset);//Set(3) { 1, 2, 4 }

let nameset:Set<string> = new Set(['aung aung','mg mg']);
console.log(nameset);//Set(2) { 'aung aung', 'mg mg' }

let mixeddata:Set<string|number|boolean> = new Set(["Thura",12,false,"naing"]);
console.log(mixeddata);//Set(4) { 'Thura', 12, false, 'naing' }


//===Common Set Method with Grenerics

const numset:Set<number> = new Set([]);

numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);
numset.add(3);
console.log(numset);//Set(5) { 1, 2, 3, 4, 5 }
console.log(numset.has(2));//true

numset.delete(4)
console.log(numset);//Set(4) { 1, 2, 3, 5 }

numset.clear()
console.log(numset);//Set(0) {}


//====Iteration Generic Set

const colorset:Set<string> = new Set(["red","green","blue"]);
for(let color of colorset){
    console.log(color);//red green blue
    
}

colorset.forEach(color =>{
    console.log(color);//red green blue
    
})

//===Generic Set with Object

type User = {
    id:number,
    name:string,
    age:number
};

const userset:Set<User> = new Set([
    {id:1,name:"aung naing",age:23},
    {id:2,name:"Khant naing",age:13},
    {id:3,name:"Khant Kyaw",age:13}
]);

userset.add({id:4,name:"Maung naing",age:43});
console.log(userset);//Set(4) {
//     { id: 1, name: 'aung naing', age: 23 },
//     { id: 2, name: 'Khant naing', age: 13 },        
//     { id: 3, name: 'Khant Kyaw', age: 13 },
//     { id: 4, name: 'Maung naing', age: 43 }
//   }


//======Keyof,extends

type VipUser = {
    id:number;
    name:string;
    email:string;
}


// type VipClient = typeof VipUser;
type VipCustomer = keyof VipUser;//Extracts keys as a union type 'id','name','email

//exe

const shop = {
    name:"Apple Store",
    city:"Mandalay"
}

type Vendor = typeof shop;
type VendorKey = keyof Vendor;//"name" | "city"

//obj
let store:Vendor = {
    name:"Cherry Store",
    city:"Mandalay"
}

console.log(store);//{ name: 'Cherry Store', city: 'Mandalay' }   




function getshopinfo<T,K extends keyof T>(obj:T,info:K):T[K]{
    return obj[info];
}

let shopname = getshopinfo(store,"name");

console.log(shopname);//Cherry Store

let shopcity = getshopinfo(store,"city");

console.log(shopcity);