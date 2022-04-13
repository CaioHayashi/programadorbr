let video = document.getElementById("video")
let back = document.getElementById("back")
let forward = document.getElementById("forward")
let add = document.getElementById("add")
let remove = document.getElementById("remove")
let play = document.getElementById("play")
let stop = document.getElementById("stop")
let fullscreen = document.getElementById("fullscreen")
let progress = document.getElementById("progress")

back.addEventListener("click", function(){
    video.currentTime -= 15
})

forward.addEventListener("click", function(){
    video.currentTime += 15
})

add.addEventListener("click", function(){
    video.playbackRate += 0.1
})

remove.addEventListener("click", function(){
    video.playbackRate -= 0.1
})

play.addEventListener("click", function(){
    video.play()
})

stop.addEventListener("click", function(){
    video.pause()
    video.currentTime = 0
    
})

fullscreen.addEventListener("click", function(){
    video.requestFullscreen()
})
progress.addEventListener('mousedown', function () {
    video.pause();
  });
  
progress.addEventListener('change', function () {
    video.currentTime = progress.value / progress.max * video.duration;
    video.play();
  });

video.addEventListener('timeupdate', function () {
    var position = this.currentTime / this.duration;
    progress.value = position * 1000;
  });
