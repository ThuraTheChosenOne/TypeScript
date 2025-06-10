//readonly
class Student{
    readonly id:number;
    name:string;
    age:number;
    phone?:string;

    constructor(id:number,name:string,age:number,phone?:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    content():void{
        console.log("Email is avaliable");
    }
}


const studentObj = new Student(1001,"Thura Naing",21);
console.log(studentObj);
console.log(typeof studentObj);//obj


console.log(studentObj.id);//1001
console.log(studentObj.name);//Thura Naing
console.log(studentObj.age);//21
console.log(studentObj.phone);//undefined

studentObj.content();//Email is avaliable

studentObj.phone = "7943";
console.log(studentObj.phone);//7943

studentObj.name = "ko ko";
console.log(studentObj.name);//7943


// studentObj.id = 1003;
// console.log(studentObj.id);error cause we cant override

const stuObj = new Student(1002,"Naing Naing",23,"98329479");
console.log(stuObj.phone);//98329479





// node l17readonly.js