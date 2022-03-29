let input = document.getElementById("input");
let btn = document.getElementById("btn");
let res = document.getElementById("res");

btn.addEventListener("click", newElement);

function newElement(){

    let newDiv = document.createElement("div");
    newDiv.classList.add("div-shadow");
    
    
    
    newDiv.innerHTML = `${input.value} <input id="checkbox" type="checkbox">`
    

    res.appendChild(newDiv);
    input.value = '';
}

