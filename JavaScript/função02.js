

function saudacao() {
    return 'Olá Mundo!'
}

var s = saudacao  //a variavel 's' recebe uma função
console.log(s())

//função anonima
var media = function(n1, n2) { 

    return (n1 + n2) / 2
}

console.log(media (5, 8.2)) 