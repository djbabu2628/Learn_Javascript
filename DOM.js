// //DOM Manipulation

// //Seleting with id
// let heading = document.getElementById("heading")
// console.dir(heading)


// //Selecting with class
// let headings = document.getElementsByClassName("heading-class");
// console.log(headings);
// console.dir(headings);


// //Selecting with tag
// let tag = document.getElementsByTagName("h1");
// console.log(tag);
// console.dir(tag);


// //Query Selector
// let elements = document.querySelector("p")
// console.log(elements);
// console.dir(elements);

// let all = document.querySelectorAll("h1");
// console.log(all);
// console.log(all);

// //Properties
// // tagName : return tag for elements Nodes
// // innerText : return the text content of the element and all its children
// // innerHTML : return the plain text or  HTML content in the element
// // textContent : return textual content even for hidden elements


// let newDiv = document.querySelector("div");
// console.dir(newDiv);

// let heading = document.querySelector("h1");
// console.dir(heading);

// let div = document.querySelector("div");
// console.log(div     );

// let name = div.getAttribute("name");
// console.log(name);



// let name2 = document.getAttribute("div");
// console.log(name2);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","para-class"));


// let para1 = document.querySelector("p");
// console.log(para1.setAttribute("class", "para-class"));


// let id = document.querySelector("#heading");
// id.style.backgroundColor = "red";
// id.style.color="black"



//Insert Element

let newBtn = document.createElement("button")
newBtn.innerText = "Submit";

//node.append(el) = adds at the ends of nodes (inside)
let button = document.querySelector("button");
button.append(newBtn);

//node.prepend(el) = adds at the start of nodes (inside)
button.prepend(newBtn);

//node.before(el) = adds at the just before of nodes (outside)
button.before(newBtn);

//node.after(el) = adds at the just after of nodes (outside)
button.after(newBtn);



let newH1 = document.createElement("h3");
newH1.innerHTML = "<i>Just Trying Bro</i>";


let heading = document.querySelector(".heading");
heading.after(newH1);


let h4 = document.querySelector(".heading-class")
h4.remove()