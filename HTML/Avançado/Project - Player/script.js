let img = document. getElementById("image")
let artist = document.getElementById("artist")
let music = document.getElementById("music")
let source = document.getElementById("source")

let musics = [
    {
        img: "red",
        artist: "Clean",
        music: "Bite Me",
        src: "assets/Bite Me (Clean) - NEFFEX.mp3",
    },
    {
        img: "blue",
        artist: "Clean",
        music: "It's Only Worth It If You Work For It",
        src: "assets/It's Only Worth It If You Work For It (Clean) - NEFFEX.mp3",
    },
    {
        img: "green",
        artist: "Clean",
        music: "Statement",
        src: "assets/Statement (Clean) - NEFFEX.mp3",
    }
]

img.style.backgroundColor = musics[0].img
artist.innerHTML = musics[0].artist
music.innerHTML = musics[0].music
source.setAttribute("src", musics[0].src)

console.log(musics)