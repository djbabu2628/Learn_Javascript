// let fullName = prompt("Enter Your Name Without Space : ");
// console.log("You entered full Name is : ",fullName);
//fullName.replace(" ","")

// console.log("Your username is @" + fullName.replace(" ","") + fullName.length);


//1st Question
console.log("Que) For a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class.")
console.log("Using For Loop ->")
let marks = [85,97,44,37,91,60],avg = 0;
for(let i=0;i<marks.length;i++){
    avg = avg + marks[i];
}
console.log("Your total marks is :",avg);
console.log("Your average marks is ",avg/marks.length);

console.log("Using for-of loop ->")
let sum = 0;
for (let mark of marks){
    sum += mark;
}
console.log(`Your total marks is ${sum} and average marks is ${sum/marks.length}`)



//2nd Question
console.log("Que) For a given array with prices of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.")
//
let prices = [250,645,300,900,50],after_prices = [];

for (let i=0;i<prices.length;i++){
    after_prices[i] = prices[i]-(prices[i]/10);
}

console.log(`Your original item prices is ${prices} and after 10% discount Your final prices is ${after_prices}`);





//3rd Question
console.log("Create an array to store compaines -> bloomberg, Microsoft, Uber, Google, IBM, Netflix \n a) Remove the first company from the array \n b) remove Uber & Add Ola in its place \n c)Add Amazon at the end ");
let comapines = [" Bloomberg", " Microsoft"," Uber"," Google"," IBM"," Netflix"];

let a = comapines.shift();
console.log(`1st Removed company is ${a} and remaining comapines are ${comapines}`);

let b = comapines.splice(1,1," Ola");
console.log(`Removed Uber and Ola in its Place ${comapines}`);

let c = comapines.push("Amazon");
console.log(comapines)



//4th Question
console.log("Que) Create the function using the function keywords that takes a string as an argument and return the no. of vowels in the string");
function countvowels(str){
    let count = 0;
    for(const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
        console.log(count);
}



//5th Question
console.log("Create an arrow function to perform same task");
const count_vowel = (str) => {
    let counts = 0;
    for(const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            counts++;
        }
    }
        console.log(counts);
}

console.log("\n\n\n\n")

//6th Question 
console.log("For a given array of numbers, print the square of each value using the forEach loop")
//Using forEach loop with simple function
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log("\nUsing Simple Function")
arr.forEach(function squareno(val){
    console.log(`${val} = ${val*val}`);
})

console.log("\n\n\n\n")

//Using forEach loop with arrow function
console.log("Using Arrow Function")
arr.forEach((val) => {
    console.log(`${val} = ${val*val}`);
})



//7th Question
marks = [85,97,44,37,91,60]
console.log("\n\n\nQue) We are given array of marks of students. Filter out of the marks of the student that scored 90+")
let outofMark = marks.filter((outof) => {
    return outof >= 90;
})
console.log(outofMark);



//8th Question 
console.log("\n\n\nTake a number n as input from user. Create an array of number from 1 1o n.\n a)Use the reduce method to calculate sum of all number in the array \n b)Use the reduce method to calculate product of all number in the array");
let n = prompt("Enter a no. for array limit : ");
console.log(`Enter ${n} no. for store no. in array`);
let arr4 = [];
for(i=0;i<n;i++){
    let num = parseInt(prompt(`Enter ${i} no. to store `));
    arr4[i] = num;
}

let sumofArr = arr4.reduce((val,curr) => {
    return curr += val;
},0);

let productofArr = arr4.reduce((val,curr) => {
    return curr *= val;
},1);

console.log(`Sum of All no. is ${sumofArr} and Product of All no. is ${productofArr}`)


let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " From Apna College Student"