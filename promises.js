

function getData(data, getNxtData)  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Data",data);
        console.log("I am promise");
        resolve("Success");
        if (getNxtData){
            getNxtData();
        }
        },5000);
});
};

function geterror(d){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data",d);
            reject("error");
        },6000)
    });
};



