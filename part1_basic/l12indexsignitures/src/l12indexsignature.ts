// => Index SIgnitures

// type Desktop = {
//     brand:string
// }

// let pc:Desktop = {
//     brand:"MSI",
//     madeby:"America"//error
// }


//exe 1

type Desktop = {
    [k:string]:string
}

let pc:Desktop = {
    brand:"MSI",
    madeby:"America"
}   

console.log(pc);


//exe 2
type PhoneBook = {
    [name:string]:number
};


const contacts:PhoneBook = {
    mother:123235,
    mylove:3458375
};

console.log(contacts.mylove);//3458375

//ese 3

type Systemunit = {
    [k:string]:string;
    // touchscren:boolean; // error ,  must be same type
    touchscreen:string;
};

let yourpc:Systemunit = {
    brand:"MSI",
    touchscreen:"avaliable",
    madeby:"USA"
};

console.log(yourpc);//{ brand: 'MSI', touchscreen: 'avaliable', madeby: 'USA' }

//=> Index Signature with object value
//exe 4 (i)
type Minipc = {
    [k:string]:{
        brandname:string;
        price:number;
    };

};

let officepc:Minipc ={
    item1:{
        brandname:"Microsoft",
        price:123
    },
    item2:{
        brandname:"MSI",
        price:123
    },
    item3:{
        brandname:"HP",
        price:123
    },
};


console.log(officepc);//{
//     item1: { brandname: 'Microsoft', price: 123 },  
//     item2: { brandname: 'MSI', price: 123 },        
//     item3: { brandname: 'HP', price: 123 }
//   }


// exe 4(ii)
type Product ={
    brand:string;
    price:number
};

type ProductList = {
    [id:string]:Product;
};



const shop:ProductList = {
    pro1:{brand:"redbull",price:343},
    pro2:{brand:"sponsor",price:123123}
};

console.log(shop);//{
//     pro1: { brand: 'redbull', price: 343 },
//     pro2: { brand: 'sponsor', price: 123123 }       
//   }
console.log(shop.pro1);//{ brand: 'redbull', price: 343 }
console.log(shop.pro2.brand);//sponsor

//exe 5

type Staff =  {
    [k:string]:string|number;
};

const employee:Staff = {
    name:"Hsu Hsu",
    age:12
};

console.log(employee);


// => Index Access Type

// exe 1
type Mobile = {
    brandname:string;
    price:number;
};

type Brand = Mobile["brandname"];// dot notation can't use
const applestore:Brand = "iPhone 13 pro max";
console.log(applestore);


//exe 2

type Car = {
    brand:string;
    year:number;
};

type BrandType = Car["brand"];
type YearType = Car["year"];

const mycarbrand:BrandType = "Nissan";
const mycaryear:YearType = 12312;

console.log(mycarbrand,mycaryear);


//=> Nested Index Access Type
type Item = {
    name:string;
    info:{
        price:number;
        hasstock:boolean;
    }
};

type PriceType = Item["info"]["price"];
type StockType = Item["info"]["hasstock"];

const itemprice:PriceType = 3000;
const itemstock:StockType = true;


console.log(itemprice,itemstock);//3000 true


//=>Union with index access

type Book = {
    title:string;
    pages:number;
};

type BookKey = "title"|"pages";
type BookInfo = Book[BookKey];// string | number

const mybooktitle:BookInfo = "TypeScript Guide Book";
const mybookpage:BookInfo = 63;

console.log(mybookpage,mybooktitle);//63 TypeScript Guide Book