let image = document.getElementById("like")

var a = 0

image.addEventListener("click", function(){
    if( a == 0){
        image.src = "image/likered.png"
        a++
    } else {
        image.src = "image/likegreen.png"
        a--
    }
})

//---------------

let list = document.getElementById("list")
list.dataset.n = 25
let num = parseInt(list.dataset.n)
console.log(num)


let conteudo = ""
for(var i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>"
}

list.innerHTML = conteudo