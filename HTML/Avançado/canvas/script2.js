let screen = document.getElementById("screen")

let ctx = screen.getContext("2d")

/* RECT */

ctx.fillStyle = "#DDD"
ctx.fillRect(10, 10, 100, 100)

ctx.fillStyle = "#BBB"
ctx.fillRect(50, 50, 100, 100)

/* LINE */
// beginPath para começar a linha e o stroke() para executar
ctx.beginPath()
ctx.lineWidth = 4
ctx.strokeStyle = "red"
ctx.moveTo(0, 10)
ctx.lineTo(500, 10)
ctx.stroke()


/* CIRCLE */
//ctx.arc(x, y, raio, inicio, fim) parametros

let x = 150
let y = 150
let raio = 75

let inicio = 0
let fim = 2 * Math.PI

ctx.beginPath()
ctx.lineWidth = 1
ctx.fillStyle = "red"
ctx.strokeStyle = "red"
ctx.arc(x, y, raio, inicio, fim)

ctx.fill()
ctx.stroke()

