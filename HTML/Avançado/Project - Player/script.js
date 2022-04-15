let names = ["Caio", "Diego", "Deh", "Douglas"]

let index = 0
function foward() {
    if( index >= names.length + 1){
         return index = 0
    } else {
        return index ++
    }
}
foward()
foward()
foward()
foward()
console.log(names.length)
console.log(index)
console.log(names[index])
