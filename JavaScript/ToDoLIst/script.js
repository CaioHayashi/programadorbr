const input = document.getElementById("input")
const btn = document.getElementById("btn")
const res = document.getElementById("res")

const tasks = []

function createElement() {
    res.innerHTML = ''

    for(task of tasks) {
        const newDiv = document.createElement("div")
        const text = document.createTextNode(task)
        newDiv.classList.add("div-shadow")

       const check = document.createElement("input")
       check.classList.add("check")
       check. setAttribute("type", "checkbox")


       check.addEventListener("change", removeElement)

/*
         const link = document.createElement("a")
        const posicao = tasks.indexOf(task)
 */
        
        newDiv.appendChild(text)
        newDiv.appendChild(check)
        res.appendChild(newDiv)
    }
}

createElement()

function addElement() {
    const textInput = input.value
    tasks.push(textInput)
    input.value = ''

    createElement()
}

btn.addEventListener("click", addElement)

function removeElement () {
    if(this.checked) {
        
    } else {
        
    }
}


console.log(tasks)