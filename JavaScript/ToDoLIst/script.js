let container = document.getElementsByClassName('container');
let valuetask = document.getElementById('valuetask');
let addButton = document.getElementById('addButton');
let res = document.getElementById('res');

var array = []
addButton. addEventListener('click', newTask);

function newTask() {
    const task = valuetask.value
    array.push(task)

    console.log(array)
   //res.innerText = array
    addDiv()
    
}

function addDiv() {
    const newDiv = document.createElement("div");
    
    newDiv.classList.add("div-shadow");
    
    res.appendChild(newDiv);
}