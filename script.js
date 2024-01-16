var button = document.querySelector("main > section#button")
var menu = document.querySelector("main > section#menu")
var img_paisagem = document.querySelector("div#img-paisagem")
var img_predios = document.querySelector("div#img-predios")
var img_tigre = document.querySelector("div#img-tigre")
var body = document.querySelector("body")
button.addEventListener("click", clickButton)
img_paisagem.addEventListener("click", clickImage)
img_paisagem.addEventListener("click", imgPaisagem)
img_predios.addEventListener("click", clickImage)
img_predios.addEventListener("click", imgPredios)
img_tigre.addEventListener("click", clickImage)
img_tigre.addEventListener("click", imgTigre)
function clickButton(){
    button.style.display = 'none';
    menu.style.display = 'flex';
}
function clickImage(){
    button.style.display = 'block';
    menu.style.display = 'none';
}
function imgPaisagem(){
    body.style.backgroundImage = "url(../images/paisagem.jpg)"
}
function imgPredios(){
    body.style.backgroundImage = "url(../images/predios.jpg)"
}
function imgTigre(){
    body.style.backgroundImage = "url(../images/tigre.jpg)"
}