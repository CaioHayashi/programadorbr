/* 
Object 

[proriedade do objeto]

    var objeto = {               
        chave: 'valor', 
        chave: ['valor', 'valor']
    }

    console.log(objeto)
    ou
    console.log(objeto['chave'])
    ou
    console.log(objeto['chave'][1]) = valor 1
    
---------------------------------------------------------

    adicionando propriedade ao objeto:

    var objeto['chave'] = valor

    ou

    var novaChave = 'chave'
    aluno[novaChave] = valor

    ou

    objeto.chave = valor

---------------------------------------------------------


   .forEach(function(element){
       console.log(element)
   })    

   ---------------------------------------------------------

   var data = new Date
   console.log(sem[data.getDay()])
console.log(data.getFullYear())
console.log(data.getTime())

 const num3 = {}
 num3. nome = 'Igor'  A const não pode reatribuir, mas permite modificar ela.


---------------------------------------------------------

function onOver (element) {
    element.style.backgroundColor = '#6c63ff'
}

---------------------------------------------------------

var.addEventListener('event', function)

---------------------------------------------------------

elemento pai e filho:

element.children
element.parentElement

---------------------------------------------------------

Numero aleatório redondo:

let n = Math.round(Math.random() * 100)

console.log(n)

---------------------------------------------------------


onload = function(){
    let nome = localStorage.getItem('guardar')
    let add = document.getElementById('tarefa')
    add.innerHTML = nome
}

function atualizar(element){
    let valor = element.value
    console.log(valor)


    localStorage.setItem('guardar', valor)

const vogais = 'aeiou'
const char = vogais.charAt(2)

console.log(char)
}

*/

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let res = document.getElementById("res")

let array = []


btn.addEventListener("click", print)

function print(){

    array.push(input.value)
    console.log(array)
    let newDiv = document.createElement("div")
    newDiv.innerHTML = `${input.value}`
    newDiv.id = "content"
    res.appendChild(newDiv)

    input.value = ""
    
}

let mput = ''


const jString = JSON.stringify(array)
console.log(jString)

/* localStorage.getItem()
localStorage.setItem()
localStorage.removeItem()
localStorage.clear() */

const jParse = JSON.parse(jString)
console.log(jParse)