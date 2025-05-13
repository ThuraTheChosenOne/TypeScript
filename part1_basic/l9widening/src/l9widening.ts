// => Type Widening 

let fullname = "Mar Lar";
fullname = "KO KO";

let age = 23;
age =22;


// type Person = {
//     name:string;
//     age:number
// }


type Person = {
    name:"Aung Aung";
    age:number
}

const student = {
    name:"Aung Aung" as const,//must be same value as Type Person , "as const"
    age:20
}

function studentname(student:Person){
    return student.name;
}



console.log(studentname(student));