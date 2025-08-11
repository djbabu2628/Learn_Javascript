//Synchronous
//Synchronous means the code runs in a particular sequence of instruction given in the program. Each instruction waits for the previous instruction complete its execution.


//Asnychronous
//Due to sychronous programming, somethings imp instruction get blocked due to some previous instruction, which cause a delay in UI.Asynchronous code execution allow to execute next instruction immediately and doesn't block the flow.


console.log("one");
console.log("two");
console.log("three");

setTimeout( () => {
    console.log("Hello Bro");
},3000);

console.log("four");
console.log("five");