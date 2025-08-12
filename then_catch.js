const getPromise = ()=> {
    return new Promise((resolve, reject)=>{
        console.log("Getting Data........");
        // resolve("Success");
        reject("Rejected")
    });
};


let promise = getPromise();
promise.then((res)=>{
    console.log("Promise ",res);
})

promise.catch((rej)=>{
    console.log("Promise ",rej);
})