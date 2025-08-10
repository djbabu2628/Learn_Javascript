let btn = document.querySelector("#btn1");
// btn.onclick= (evt) => {
//     // console.log(evt);
//     // console.log(evt.type)
//     // console.log(evt.clientX,evt.clientY);
//     // console.log("button was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a);
// }

// let box = document.querySelector(".box");

// box.onmouseover = () => {
//     console.log("you are inside a div");
// };


// btn.addEventListener("click",() => {
//      console.log("Button was clicked");
// });
// btn.addEventListener("click",() => {
//      console.log("Button was clicked with handler3");
// });


// let harndler2 = () => {
//      console.log("Button was clicked with handler2");
// }

// btn.addEventListener("click", harndler2)
// btn.removeEventListener("click",harndler2)

let mode = document.querySelector("#mode");
    
let currmode = "light"

    mode.addEventListener("click",()=>{
    if (currmode == "light"){
        currmode = "dark";
        mode.innerText = "Light mode"
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = "light";
        mode.innerText = "Dark mode"
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode)
})