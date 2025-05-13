
// => Interface

//TY=ype 

type fullname = string;
type age = number;

type Student = {
    id:number;
    name:string;
    hobbies:string[]
};

//Interface

// interface city = string;// can't declare like that

interface Employee{
    id:number;
    name:string;
    hobbies:string[]
};

function application(id:number,name:string,hobbies:string[]):Employee{
    return {
        id:id,
        name:name,
        hobbies:hobbies
    }
}

let result:Employee = application(1001,"Thura Naing",["reading","writing"]);
console.log(result);//{ id: 1001, name: 'Thura Naing', hobbies: [ 'reading', 'writing' ] }




function applicant(id:number,name:string,hobbies:string[]):Employee{
    return {
        id:id,
        name:name,
        hobbies:hobbies
    }
}

let result2:Employee = applicant(1001,"Thura KO",["fapping","writing"]);
console.log(result2);//{ id: 1001, name: 'Thura Naing', hobbies: [ 'reading', 'writing' ] }


// => Interface Method
//exe 1
interface Employer {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function cvform(id:number,name:string,hobbies:string[]):Employer{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return this.hobbies;
        }
    }
}

const result3:Employer = cvform(1003,"Kyaw Kyaw",["reading","playing"]);
console.log(result3);

//exe 2
interface Lawer {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
}

function getinfo(id:number,name:string,hobbies:string[]):Lawer{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return result4.hobbies;
        }
    }
}

const result4:Lawer = getinfo(1023,"Htun Kyaw",["eating","playing"]);
console.log(result4);
console.log(result4.gethobbies());//[ 'eating', 'playing' ]

// => Extending Interface
interface Task{
    tasks:string[]
}
interface Staff extends Task {
    id:number;
    name:string;
    hobbies:string[];
    gethobbies():string[];
    
}



function personalinfo(id:number,name:string,hobbies:string[],tasks:string[]):Staff{
    return {
        id,
        name,
        hobbies,
        gethobbies(){
            return this.hobbies;
        },
        tasks
    }
}

const result5:Staff = personalinfo(23,"Mya Yin",["eating","playing"],["print","report"]);
console.log(result5);


// => Argument Inerfaces

// type Name = string;
// typw Name = string;//error same name cant be typed

interface Product{
    brand:string;
    price:number
}



const productinfo:Product = {
    brand:"iPhone",
    price:2500.89,
    packing:"can",
    stock:34
}

interface Product{
    packing:string;
    stock:number;
    price:number //data typr must be same as above
}


console.log(productinfo);