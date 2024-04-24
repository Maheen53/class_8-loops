//basic syntax for  of loop
// for(variable of iterable){
    //statment
//}

const girls =["sana","sara","ayesha","bisma"]

// for(let girl of girls){
//     console.log(  "my sister is ",girl);
// }
// let girl =["sana","sara","ayesha","marry"]
let index = 1
for (let girl of girls){
console.log(`my ${index} sister is ${girls}`)
index++
}