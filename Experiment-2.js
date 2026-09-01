const fs = require('fs');
fs.writeFile('example.txt','Hello Everyone I am Anahita Jadon, an engineering student',(err) => {
    if(err) throw err;
    console.log('File created!!');

    fs.readFile('example.txt','utf8',(err,data) => {
        console.log('File content: ',data);
    });
});
fs.appendFile('example.txt','\nThis line was added',(err)=> {
    if(err) throw err;
    console.log('File updated (appended)!');
});
fs.unlink('example.txt',(err) => {
    if(err) throw err;
    console.log('File deleted!!');
});
console.log("1: Start (sync)");

setTimeout(() => {
    console.log("2: setTimeout (macroTask - timers phase)");
}, 0);

setImmediate(() => {
    console.log("3: setImmediate (macroTask - check phase)");
});

process.nextTick(() => {
    console.log("4: process.nextTick (highest priority microtask)");
});

Promise.resolve().then(() => {
    console.log("5: Promise.then (microtask)");
});

const fs = require("fs");

console.log("1: Start (sync)");

setTimeout(() => {
    console.log("2: Inside setTimeout (macrotask - runs LAST)");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Inside Promise.then (microtask - runs BEFORE setTimeout)");
});

fs.readFile("filename", () => {
    console.log("4: Inside fs.readFile callback (I/O - runs later)");
});

console.log("5: End (sync)");

