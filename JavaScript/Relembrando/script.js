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

*/
function loaded(){
let t = document.getElementById('titulo')

// t.onclick = novoTexto
t.addEventListener('mouseover', mouseover)
t.addEventListener('mouseout', mouseout)

}

function mouseover(){
    this.innerHTML = 'Mouse em cima do elemento'
}

function mouseout(){
    this.innerHTML = 'Mouse fora do elemento'
}