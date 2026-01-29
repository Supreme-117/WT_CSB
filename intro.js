// "use strict";
// console.log("first");

// a=10;
// console.log(a);
// // console.log(window);

// let a=10;
// console.log(window);

// var a=10;
// var a=20; //Redeclaration is allowed
// console.log(a);


// function hello (){
//     if(true){
//         var x=25;
//         console.log("andar");
//         console.log(x);
//     }

//     console.log(x);
// }

// hello();
// console.log(z); //undefined
// var z=40;

// function hello1 (){
//     if(true){
//         let x=25;
//         console.log("andar");
//         console.log(x);
//     }

//     console.log(x);
// }

// hello1();

// console.log(z); //undefined  TDZ Temporal Deadzone Zone
// let z=40;
// z=20;
// console.log(z);
let y=40;
y=20;
console.log(y);

// console.log(z); //undefined  TDZ Temporal Deadzone Zone
// const z=40;
// z=20;
// console.log(z);

let b=1;
{let b=2}
console.log(b);

const arr=[1,2,3,4,5];
arr.push(6);
console.log(arr); //allowed
arr=[1,2,3,4];// not allowed

