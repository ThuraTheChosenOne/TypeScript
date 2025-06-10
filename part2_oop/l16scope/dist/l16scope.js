"use strict";
var globalVar = "I am a global scope var";
let globalLet = "I am a global scope let";
const globalConst = "I am a global scope const";
function accessglobalscope() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
accessglobalscope();
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
function accesslocalscope() {
    var localVar = "I am a local scope var";
    let localLet = "I am a local scope let";
    const localConst = "I am a local scope const";
    console.log(localVar);
    console.log(localLet);
    console.log(localConst);
}
accesslocalscope();
function accessblockscope() {
    if (true) {
        var blockVar = "I am a block scope var";
        let blockLet = "I am a block scope let";
        const blockConst = "I am a block scope const";
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(blockVar);
}
accessblockscope();
