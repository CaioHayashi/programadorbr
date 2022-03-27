let container = document.getElementsByClassName('container')
let valuetask = document.getElementById('valuetask')
let addButton = document.getElementById('addButton')

var array = []

addButton.addEventListener('click', function(){
    task = valuetask.value
    array.push(task)

    
})



/* .forEach(function(element){
    console.log(element)
}) */