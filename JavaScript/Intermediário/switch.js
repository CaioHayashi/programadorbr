var nota1 = 8.0

var nota2 = 3.8

var media = (nota1 + nota2) / 2


var conceito = ''
if (media >= 8) {
    //ótimo
    conceito = 'Ótimo'
} else if (media >= 6.5) {  
    //bom 
    conceito = 'Bom'
} else {
    //regular
    conceito = 'Regular'
}

console.log(`Sua média é ${media}, ${conceito}`)

switch (conceito) {

    case 'Ótimo':
        console.log('Parabéns, continue assim!')
        break
    
    case 'Bom':
        console.log('Você está no caminho!')
        break
    
    case 'Regular':
        console.log('Estude um pouco mais, você consegue!')
        break

    default:
        console.log('Houve um erro')
}