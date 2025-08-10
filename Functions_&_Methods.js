function fun(para){
    console.log("Hello World");
    console.log(para);
    console.log("I am use function 1st time \n\n");
}

fun('');
fun("I Love full stack");
fun("It's my first declare function")


// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,5);

//using return 
// function sum_return(a,b){
//     //Local Variable ->it have block scope means it live until the function if the function is complete or end then the variable also end or died
//     s = a+b;
//     console.log("before return");
//     return s;
//     console.log("after return");

// }
// let ret = sum_return(5,6);
// console.log(ret)


//Arrow Function
const arrow_sum = (a,b) => {
    return a+b;
}

const arrow_Mul = (a,b)=>{
    return a*b;
}

arrow_sum(5,6);
arrow_Mul(5,8);


//forEach loop in Arrays & it is a Higher order function or method
//arr.forEach(callBackFunction)
//A callbacked is a function passed as an argument to another function

//forEach loop in Function
let arr = [1,2,3,4,5,6,7,8,9,"hello","Element","Sources","Network","Performance"];
arr.forEach(function call_value(val){
    console.log(val);
})


//forEach loop in Arrow Function
arr.forEach((val) => {
    console.log(val);
})


let arr1 = ["hello","Element","Sources","Network","Performance"];
arr1.forEach((value,ind,arr) => {
console.log(value,ind,arr)
})


//Map Array Method
let newArr = arr1.map((val) => {
    return val;
})

console.log("Using Map Loop",newArr);


let arr2 = [1,2,3,4,5,6,7,8,9,10,12]

let even_arr = arr2.filter((val) => {
    return  val % 2 === 0;
   console.log(val);
})

console.log(even_arr);


let sumofAll = arr2.reduce((res,curr) => {
    return res + curr;
})
console.log(sumofAll);


let larVal = arr2.reduce((res,curr) => {
    return res > curr ? res : curr;
})

console.log(larVal);