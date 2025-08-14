const URL = "https://catfact.ninja/facts";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log('Getting Data..........');
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data)
    // console.log(data.data[0].fact);
    para.innerText = data.data[2].fact;
};

btn.addEventListener("click", getFacts);