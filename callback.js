function mul(a, b) {
    console.log(a*b);
}

function calculator(a,b,mul) {
    mul(a,b);
}

calculator(3,5,mul);

//Nesting 

let age = 18;
if(age>=18){
    if (age>=60){
        console.log("Senior");
    }
    else{
        console.log("middle");
    }
} else {
    console.log("Child");
}