let audio = document.querySelector("#audio")
let next = document.querySelector("#next")
let play = document.querySelector("#play")
let back = document.querySelector("#back")
let progress = document.querySelector("bar")
let img = document.querySelector("#img")
let choose = document.querySelector("#choose")
let musics = [
    {
        file: "assets/Bite Me (Clean) - NEFFEX.mp3"
    },
    {
        file: "assets/It's Only Worth It If You Work For It (Clean) - NEFFEX.mp3"
    },
    {
        file: "assets/Statement (Clean) - NEFFEX.mp3"
    }
]
let index = 0
let count = 0

img.src
audio.src = musics[index].file


function nextMusic(){
    index++

    if(index > musics.length - 1) {
        index = 0
    }
    audio.src = musics[index].file
    audio.play()
}

function backMusic(){
    index --
    
    if(index < 0){
        index = musics.length - 1
    }
    audio.src = musics[index].file
    audio.play()
}
    

musics.forEach((value ,index) => {
    let newBtn = document.createElement("button")

    newBtn.innerHTML = musics[index].file
    choose.appendChild(newBtn)
    
    newBtn.addEventListener("click", function(){
        audio.src = musics[index].file
        audio.play()
        console.log(musics[index].file)
    })
})

function playPause(){
    if(count == 0){
        count = 1
        audio.play()
        play.src = "button/pause-circle.svg"
    } else {
        count = 0
        audio.pause()
        play.src = "button/play-circle.svg"
    }
}


next.addEventListener("click", nextMusic)
play.addEventListener("click", playPause)
back.addEventListener("click", backMusic)

