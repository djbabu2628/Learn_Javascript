const URL = "https://catfact.ninja/facts";
let para = document.querySelector("#para");

const getFacts = async ()=>{
    console.log('Getting Data..........');
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data)
    // console.log(data.data[0].fact);
    para.innerText = data.data[0].fact;
};

