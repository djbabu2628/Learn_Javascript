function asyncfun1()  {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Data 1");
            resolve("Success");
        },5000);
    });
};

function asyncfun2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data 2");
            resolve("Success");
        },5000);
    });
};

console.log("Fetching Data.......");
let d1 = asyncfun1();
d1.then((res)=>{
    console.log(res);
    console.log("Fetching Data");
    let d2 = asyncfun2();
    d2.then((res)=>{
        console.log(res);
    })
})