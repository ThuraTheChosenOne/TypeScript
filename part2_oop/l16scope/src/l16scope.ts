//--------------Scope------------------

// Global Scope 
// Function Scope (var)
// Block Scope(let,const)

//=>Global Scope

var globalVar:string = "I am a global scope var";
let globalLet:string = "I am a global scope let";
const globalConst:string = "I am a global scope const";

function accessglobalscope(){
    console.log(globalVar);//accessible
    console.log(globalLet);//accessible
    console.log(globalConst);//accessible
}

accessglobalscope();

console.log(globalVar);//accessible
console.log(globalLet);//accessible
console.log(globalConst);//accessible

//=>Local Scope

function accesslocalscope(){

    var localVar:string = "I am a local scope var";
    let localLet:string = "I am a local scope let";
    const localConst:string = "I am a local scope const";

    console.log(localVar);//accessible
    console.log(localLet);//accessible
    console.log(localConst);//accessible
}


accesslocalscope();

//=>Block scope

function accessblockscope(){
    if(true){
        var blockVar:string = "I am a block scope var";
        let blockLet:string = "I am a block scope let";
        const blockConst:string = "I am a block scope const";
    
        console.log(blockVar);//accessible
        console.log(blockLet);//accessible
        console.log(blockConst);//accessible
    }

    console.log(blockVar);//accessible
    // console.log(blockLet);//not accessible
    // console.log(blockConst);//not accessible

    
}


accessblockscope();
//node l16scope.js