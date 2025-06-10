// Properties, Methods ,

class Student {
    id:number;
    name:string;
    age:number;

    constructor(id:number,name:string,age:number){
        //binding stage
        this.id = id;
        this.name = name;
        this.age = age;
    }

    content():void{
        console.log('Phone , Email are not available.');
    }
}


const studentObj = new Student(1001,"su su",15);
console.log(studentObj);//Student { id: 1001, name: 'su su', age: 15 }
console.log(typeof studentObj);//object


console.log(studentObj.id);//1001
console.log(studentObj.name);//su su 
console.log(studentObj.age);//15

studentObj.content();//Phone , Email are not available.
// node l14class.js