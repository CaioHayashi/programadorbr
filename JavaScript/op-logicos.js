// && e
// || ou
// ! negativo


//&&

/* 
var a = 'azul'
var b = 'vermelho'

var c = a && b

console.log(c)

var idade = 25

var maior20 = idade > 20
var menor30 = idade < 30

console.log('maior que vinte', maior20)
console.log('menor que trinta', menor30)

console.log (idade > 20 && idade < 30)
*/


// ||
/** 
var idade = 5

var menor10 = idade <= 10
var maior65 = idade >= 65

var gratuidade = menor10 || maior65

console.log('idade', idade)
console.log('maior que 65 ', maior65)
console.log('menor que 10', menor10)
console.log('Tem acesso a gratuidade?', gratuidade)
*/

var idade = 15

var maior20 = idade > 20
var menor30 = !maior20

console.log(maior20)
console.log(menor30)