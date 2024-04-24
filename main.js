"use strict";
// //basic syntax of loop
Object.defineProperty(exports, "__esModule", { value: true });
/// //for(initialization;condition;increment/decrement){
// //   statment
// //}
//  //initialization means where the loop start
// //condition is used to check f the loop should continue
// //increment /decrement is used to update the value of i
// for(let i = 0 ; i < 10 ; i++){
//     console.log(i );
// }
// for(let i = 0 ; i < 10 ; i++){
//     console.log("i will not late class anymore" );
// }
// for(let i = 1 ; i < 15 ; i++){
//     let tableNumber: number =5;
//     console.log(tableNumber ,"x",i,"=",tableNumber*i );
// }
// for(let i = 1; i < 15 ; i++){
//     let tableNumber :number = 9
//     console.log(tableNumber,"x",i,"=",tableNumber*i);
// }
// for(let i = 1; i < 100 ; i++){
//     let tableNumber :number = 7
//     console.log(tableNumber,"x",i,"=",tableNumber*i);
// }
// array is used to store a multiple value in single variable
const cars = ["BMW", "VOLVO", "SAAB", "FORD"];
let datalength = cars.length;
//using loop iterate over on array and print the value of each
for (let i = 0; i < datalength; i++) {
    console.log("datalength", datalength);
    console.log("my car is", cars[i]);
}
console.log(datalength);
