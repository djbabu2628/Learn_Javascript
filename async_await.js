function api(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data: ",data);
            console.log("Getting Data..........");
            resolve("Success");
        },2000);
    });
};

async function getData(){
    await api(2);
    await api(3);
    await api(1);
    await api(5);
    await api(6);
    await api(7);
    await api(9);
    await api(8);
}