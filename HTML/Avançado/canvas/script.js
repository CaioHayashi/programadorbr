let screen = document.getElementById("screen")

let context = screen.getContext("2d")
context.lineWidth = 5
context.strokeStyle = "#ff0000"
context.moveTo(0,0)
context.lineTo(250,250)
context.lineTo(500,0)
context.stroke()
