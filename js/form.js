let btn=document.getElementById("sub")
let fileinfo=document.getElementById("file")
btn.addEventListener("click", getinfo)
function getinfo(ev){
ev.preventDefault()
console.log(fileinfo.files[0])
}