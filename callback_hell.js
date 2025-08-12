function getData(dataID, getNextdata) {
    setTimeout( () => {
        console.log("hello",dataID);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}


getData(1, () => {
    console.log("Getting Data.........");
    getData(2, () => {
            console.log("Getting Data.........");
        getData(3, ()=> {
                console.log("Getting Data.........");
            getData("End");
        })
    });
})