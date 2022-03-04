// ou repetição

 //---FOR
var numero = 5
 
console.log('Começou')
for (var i = 0; i < numero; i++) {
    console.log(`executando o for pela ${i + 1} vez.`)
}
console.log('Acabou')

// ---WHILE

var num = 1

while (num <= 10) {
    console.log(`Número ${num}`)
    num++

}

console.log('Acabou')

num = Math.random() * 100

while(num < 90) {
    console.log(num)
    num = Math.random() * 100
}
console.log(num)
console.log('FIM ')

