// =>For
 
for(let x:number=0; x < 10 ; x++) console.log(x);

let numarrs:number[] = [10,20,30,40,50,60,70,80,90,100];

for(let y:number=0; y < numarrs.length ; y++){
    console.log(numarrs[y]);
}

let mixarrs:(string|number)[] = ["red",'green',100,22,'blue']
for(let p:number= 0 ; p < mixarrs.length ; p++){
    console.log(mixarrs[p]);
}

// =>For of 

for(let mixarr of mixarrs) console.log(mixarr);

for(let mix of mixarrs.entries()) console.log(mix[0],mix[1]);

for(let [idx,val] of mixarrs.entries()) console.log(idx,val);


// =>For in


for(let key in mixarrs) console.log(mixarrs[key])

for(let key in mixarrs){
    // console.log(typeof key) //string
    // console.log(typeof +key) //number

    console.log(`${+key+1} . ${mixarrs[key]}`);
}