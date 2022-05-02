let screen1 = document.getElementById("screen1")

let ctx1 = screen1.getContext("2d")


/* screen1 - ANIMAÇÃO*/

let circle = {
    x: 250,
    y: 250,
    radius: 100,
    start: 0,
    end: 0, // 2* Math.PI é o circulo completo
    antiHor: true // Circulo se apagando, vem por padrao "false"
}

function drawCircle(c){
    ctx1.fillStyle = "#BBB"
    ctx1.fillRect(0, 0, 500, 500)

    ctx1.beginPath()
    ctx1.arc(c.x, c.y, c.radius, c.start, c.end, c.antiHor)
    ctx1.fillStyle = "blue"
    ctx1.strokeStyle = "blue"

    ctx1.fill()
    ctx1.stroke()
}


setInterval(function(){
    if(circle.end < 2 * Math.PI){
        circle.end += 0.1
        circle.x += 2
    }

    drawCircle(circle)
},30)

