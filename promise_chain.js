function asyncfun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            console.log("Fetching Data........");
            resolve("Success");
        }, 2000);
    });
};

function asyncfun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2");
            console.log("Fetching Data........");
            resolve("Success");
        }, 2000);
    });
};

function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is: ", data);
            console.log("Fetching Data........");
            resolve("Success");
        }, 4000);
    });
};

console.log("Fetching Data........");
asyncfun1().then((res) => {
    return asyncfun2();
}).then((res)=>{
    return getData(5);
}).then((res)=>{
    return getData(9);
})

    // console.log(res);
    // console.log("Fetching Data........");
    // asyncfun2().then((res) => {
    //     console.log(res);
    //     console.log("Fetching Data........")
    //     getData(5).then((res) => {
    //         console.log(res);
    //         console.log("Fetching Data........")
    //         getData(3).then((res) => {
                
    //             console.log(res);
    //         });
    //     });
    // });


