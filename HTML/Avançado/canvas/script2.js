let screen = document.getElementById("screen")

let ctx = screen.getContext("2d")

ctx.fillStyle = "#DDD"
ctx.fillRect(10, 10, 200, 200)

ctx.fillStyle = "#BBB"
ctx.fillRect(100, 100, 200, 200)

ctx.beginPath()
ctx.lineWidth = 4
ctx.strokeStyle = "red"
ctx.moveTo(0, 10)
ctx.lineTo(500, 10)
ctx.stroke()


ctx