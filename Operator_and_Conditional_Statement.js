// Arithmetic  Opertion
let a = 5;
let b = 10;
let c = 26;
let d = 28;
// console.log("a =",a,"b =",b);
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("b ^ a = ",a**b);

console.log("a =",a,"b =",b);
console.log("a++",a++,"b--",b--);

console.log("a =",a,"b =",b);
console.log("++a",++a,"++b",++b);
console.log("a =",a,"b =",b);

//Assignment Operator
a += 4,b +=5;
console.log("a=",a,"b=",b);

console.log("c == d",c == d);
c += 2;
console.log("c == d",c == d);

//Comparison Operator
console.log("a < b =",a<b);
console.log("a > b =",a>b);


//Logical Operator
// Type of Logical Operator 
// AND = &&, OR = ||, NOT = !
console.log("a < b =",a<b,"c === d",c === d);
let cond1 = a<b;
let cond2 = c===d;
console.log("cond1 && cond2 =",cond1&&cond2);
console.log("cond1 || cond2 =",cond1||cond2);
console.log("cond1 && cond2 =",!(cond1&&cond2));

//Conditional Statement
let mode = "dark";
let color;
if (mode == "dark"){
    color = "black";
}
else {
    color = "white";
};

console.log(color);

let age = 18


if(age===18){
    console.log("Hello 1st time voter");
}
else if(age > 18){
    ("Your are Small in age")
}
if(age<69){
    console.log("You have exprince");
}

//Ternary Operator

// let result = 75;

// let marks = result >= 35 ? "pass" : "fail";
// console.log(marks);


// let no = prompt("Enter any number :");

// if(no%5 === 0){
//     console.log(no,"is multiple of 5");
// }
// else{
//     console.log(no,"is not multiple of 5");
// }


// let score = prompt("Enter a score");

// if(score >= 80){
//     console.log("A");
// }
// else if(score >= 70){
//     console.log("B");
// }
// else if(score >= 60){
//     console.log("C");
// }
// else if(score >= 50){
//     console.log("D");
// }
// else if(score >= 0){
//     console.log("E")
// }


//Loops
//There are 5 types of loop
// 1st) for loop
// 2nd) while loop
// 3rd) do while loop
// 4th) for of loop
// 5th) for in loop

// 1st) for loop

// for(let i=0;i<=2;i++){
//     console.log("Hello World");
// }
let abc=0;
for(let i=1;i<=100;i++){
    abc+=i;
    // console.log(i);
    // console.log(abc);
}
console.log(abc);
console.log("loop is ended");

//While loop

// let i=0;
// while(i<=9){
//     console.log("i =",i);
//     i++;
// }


//do while loop
// let i=0;
// do {
//     console.log("hello World");
//     i++;
// } while(i<=3);

//for-of loop

// let str = "Hello World",stringlen = 0;
// for(let i of str){
//     console.log("i =",i);
//     stringlen++;
// };

// console.log(stringlen);

//for-in loop

// let student = {
//     name: "Vivek",
//     age: 21,
//     cgpa: 7.12,
//     isPass: true
// }
// for(let key in student){
// console.log("Key is",key,"And Value is ",student[key]);
    // }


    // for(let even=0;even<=100;even++){
    //         if(even%2 === 0){
    //             console.log(even);
    //         }
    //     }

// let gameno = 28;
    
// let userno = prompt("Enter a No.");
// while(gameno != userno){
//     userno = prompt("You Enter Wrong number, Enter again No.");
// }

// alert("Congratualtion you win");

// let str = "Hello World";
// let str1 = 'Vivek Chavhan';

// console.log(str);
// console.log(str1);
// console.log(str.length);
// console.log(str1.length);
// console.log(str[6]);
// console.log(str1[0]);

//Template Literals = ``

//String Interpolation

// let specialString = `First I print ${str} and next i print ${str1}`;
// console.log(specialString);


//Escape Characters = \n \t


//String Method is like 

// str.toUpperCase()
// str.toLowerCase()
// str.trim()
// str.slice(start,end?)
// str.concat(str1)
// str.replace(searchVal,newVal)
// str.charAt()


//str.toUpperCase or str.toLowerCase
let str = "String Method";
console.log("Print Original string",str);
console.log("Convert into Lower Case",str.toLowerCase());
console.log("Convert into Upper Case",str.toUpperCase());


//str.trim()
let str1 = "   Hello World          ";
console.log(str1);
console.log(str1.trim());


//str.slice(start,end)
let str2 = "Vivek Chavhan ",str3 = "Hello ";
console.log(str2.slice(0,5));


//str.concat(str1)
let newStr = str3.concat(str2);
console.log(newStr);
let newstr1 = str3 + str2 +2628;
console.log(newstr1);


//str.replace(searchVal,newVal)
console.log(str2.replace("Vivek","Hello"));
console.log(str2.replaceAll("h", "a"))


//str.charAt()
console.log(str3.charAt(4));