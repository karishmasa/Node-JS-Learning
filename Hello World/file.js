//blocking and unblocking request sync & async
//node js architecture


//file handling means file k upar operation karna
//in node js fs module is built in
//const fs = require('fs');

//Sync
//fs.writeFileSync("./test.txt", "Hello World");

//Async
//fs.writeFile("./test.txt", "Hello World Async" , (err) => {});

//const result = fs.readFileSync("./contacts.txt", "utf-8")
//console.log(result);
/*
fs.readFile("./contacts.txt", "utf-8", (err,result) => {
    if(err) {
        console.log("Error", err);
    } else{
        console.log(result);
    }
});*/

//fs.appendFileSync("./test.txt", `Hey There\n`);
//fs.appendFileSync("./test.txt", `${Date.now()}Hey There\n`);

//fs.cpSync('./test.txt','./copy.txt')

//fs.unlinkSync("./copy.txt");

//console.log(fs.statSync('./test.txt'));
//fs.mkdirSync('my-docs/a/b', {recursive:true});
/*
const fs = require("fs");

//blocking
fs.writeFileSync("./test.txt","Hello Worlld");

//non-blocking
fs.writeFile("./test.txt", "Hello World Async", (err) => {})
*/
const fs = require("fs");
const os = require('os');

console.log(os.cpus().length);
//blocking
/*
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);
console.log("2");
*/

//non-blocking
//console.log("1");

fs.readFile("contacts.txt","utf-8",(err,result)=>{
   // console.log(result);
});
//console.log("2");