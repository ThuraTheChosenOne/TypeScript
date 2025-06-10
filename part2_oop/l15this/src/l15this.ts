//-------this keyword-------
//at top-level in the browser : "this" refers to 'window'
//In strict mode or in modules .it will be 'undefined (in node or es6)



console.log(this);//{}

// Object with method using this
const student = {
    info():void{
        console.log(this);
    }
}

student.info();//{ info: [Function: info] }

// Class with method using this
class Student{
    content():void{
        console.log(this);
    }
}

const studentObj = new Student();
console.log(studentObj);//Student {}
studentObj.content();//Student {}


//call() , apply(), bind()


function sayhi(name:string,msg:string):void{
    console.log(this);// strict:false
    console.log(`Hay...${name} .${msg}`);
}

sayhi("su su","How are you doing?");//Hay...su su .How are you doing?

//============call()
sayhi.call({name:'Yu Yu'});//{ name: 'Yu Yu' } Hay...undefined .undefined
sayhi.call("yu yu","how are you doing?");//[String: 'yu yu']
// Hay...how are you doing? .undefined

sayhi.call({fullname:"nu nu"},"aye aye","how are you?");//{ fullname: 'nu nu' }Hay...aye aye .how are you?
//first parameter is for 'this' ,second one is for name third is for msg



//============apply()

sayhi.apply({name:'Yu Yu'});//{ name: 'Yu Yu' } Hay...undefined .undefined
// sayhi.apply("yu yu","how are you doing?");//error
// sayhi.apply({fullname:"nu nu"},"aye aye","how are you?");//error

sayhi.apply({fullname:"nu nu"},['kyaw kyaw','yo? whats up nigga?']);//{ fullname: 'nu nu' } Hay...kyaw kyaw .yo? whats up nigga?

//=============bind()

let bindfun = sayhi.bind({fullname:"ko ko"},"mu mu","how are you?")

bindfun();//{ fullname: 'ko ko' }Hay...mu mu .how are you?














// node l15this.js