let video = document.getElementById("video")

document.getElementById("back").addEventListener("click", function(){
    video.currentTime -= 15
})

document.getElementById("forward").addEventListener("click", function(){
    video.currentTime += 15
})

document.getElementById("add").addEventListener("click", function(){
    video.playbackRate += 0.1
})

document.getElementById("remove").addEventListener("click", function(){
    video.playbackRate -= 0.1
})

document.getElementById("play").addEventListener("click", function(){
    video.play()
})

document.getElementById("stop").addEventListener("click", function(){
    video.pause()
    video.currentTime = 0
    
})

document.getElementById("fullscreen").addEventListener("click", function(){
    video.requestFullscreen()
})