const URL = "https://catfact.ninja/facts";

const getFacts = async ()=>{
    console.log('Getting Data..........');
    let response = await fetch(URL);
    console.log(response);
};

