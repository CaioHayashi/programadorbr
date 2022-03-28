let container = document.getElementsByClassName('container')
let valuetask = document.getElementById('valuetask')
let addButton = document.getElementById('addButton')
let res = document.getElementById('res')

let array = []

addButton.addEventListener('click', function(){
    task = valuetask.value
    array.push(task)

    res.innerHTML = array
})


