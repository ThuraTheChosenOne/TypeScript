// Modifier            Main class       Sub calss      Outside
// public              yes              yes            yes
// protected           yes              yes            no
// private             yes              no             no


//=> Public(Default)

class User{
    public name:string;

    constructor(name:string){
        this.name = name;
    }

    public content():void{
        console.log("Phone is avaliable");
    }
}

const userObj  = new User("Kyaw Kyaw");
console.log(userObj.name);

userObj.name = "ko ko";
console.log(userObj.name);


console.log(userObj.content());



//=>Protected

class People{
    protected name:string;

    constructor(name:string){
        this.name = name;
    }
}


class Employee extends People{
    greeting():void{
        console.log(`Hello ${this.name}`);
    }
}


const employeeObj = new Employee("thinzar");
employeeObj.greeting();
// console.log(employeeObj.name);//error 


//=>Private
class BankAccount{
    private balance:number;
    constructor(balance:number){
        this.balance = balance;
    }

    public showbalance(){
        console.log(`Main Balace is = ${this.balance}`);
    }
}

const bankObj = new BankAccount(2400);
// console.log(backObj.balance());//error balance is private it cant access data

bankObj.showbalance();//Main Balace is = 2400

//=>Exercise

class Student{
    // public readonly id:number;
    // public name:string;
    // private age:number;//require params come before optional ones
    // protected phone?:string;

    // constructor(id:number,name:string,age:number,phone?:string){
    //     this.id = id;
    //     this.name = name;
    //     this.age = age;
    //     this.phone = phone;
    // }

    
    
   
    

    constructor(
        public readonly id:number,
        public name:string,
        private age:number,
        protected phone?:string
        ){
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    content():void{
        console.log("Email is avaliable");
    }

    getage():number{
        return this.age;
    }

    getphone():string | undefined{
        return this.phone;
    }

}

const studentObj = new Student(1001,"hu hu",15);
studentObj.name = "hsu hsu";
console.log(studentObj.name);

// studentObj.name = 12323;//errror readonly


// console.log(studentObj.age);//error private
// console.log(studentObj.phone);//error protected

studentObj.content();//Email is avaliable
console.log(studentObj.getage());//15

const studentObj2 = new Student(10003,"yun yun",43,"09123123");
console.log(studentObj2.getphone());//09123123
//node l18accessmodifier.js


