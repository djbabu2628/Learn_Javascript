let marks = [54,44,66,65,65]
// console.log(marks);
// console.log(marks.length);

let superheros = ['superman','spiderman','ironman','shaktiman','krish']
console.log(superheros[4]);

superheros[3]='hulk';
console.log(superheros[3]);

//string are immutable
//arr are mutable


//Looping over an Array
for(let i=0;i<superheros.length;i++){
    console.log(superheros[i],"\n");
}

//2nd way to print all array index 
for(let superhero of superheros){
    console.log(superhero)
}


//Arrays Methods
//push() pop() toString() concat()


//push()
let food = ['mango','banana','panir','tamato']
console.log(food);
food.push("vadapav","maggie","chiku","Kurkure")
console.log(food);

//pop()
let deletedItem = food.pop();
console.log(food);
console.log("deleted Items :",deletedItem);
food.push(deletedItem);

//toString()
console.log(food.toString());
console.log(marks.toString());
console.log(marks);

//concat()
// let concat = food.concat(marks);
console.log(food.concat(marks));


//unshift() and shift()

console.log(food);

food.unshift("Papaya");
console.log(food);


//slice(start,end?)
console.log(food.slice(1,4));


//splice(startIdx,delCount,newEl1)

//Add Element
//food.splice(1,0,"Aamba");

//Del Element
//food.splice(1,1);
//food.splice(1);

//Replace element
//food.splice(1,1,"Aamba");

food.splice(1,3,"Aamba","Kela","Palak Panir");
console.log(food);

