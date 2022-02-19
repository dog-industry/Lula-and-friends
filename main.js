var canvas=new fabric.Canvas("mi_canvas")
var ultima_posicion_de_x=100
var ultima_posicion_de_y=100
var personaje=""
var imagenDeBloque=""
var ancho=30
var alto=30
function add(imagen1){
    estampa1=new Image()
    estampa1.onload=estampa
    estampa1.src=imagen1
}
function jugador() {
    console.log(ultima_posicion_de_x+"/"+ultima_posicion_de_y)
    fabric.Image.fromURL("player.png",function(Img){
        personaje=Img
        personaje.scaleToWidth(150)
        personaje.scaleToHeight(140)
        personaje.set({
            top:ultima_posicion_de_y,
            left:ultima_posicion_de_x
        })
        canvas.add(personaje)
    })
    //ctx.drawImage(estampa1,ultima_posicion_de_x,ultima_posicion_de_y, 40,40)//
}
function nuevaimagen(get_image) {
    console.log(ultima_posicion_de_x+"/"+ultima_posicion_de_y)
    fabric.Image.fromURL(get_image,function(Img){
        imagenDeBloque=Img
        imagenDeBloque.scaleToWidth(ancho)
        imagenDeBloque.scaleToHeight(alto)
        imagenDeBloque.set({
            top:ultima_posicion_de_y,
            left:ultima_posicion_de_x
        })
        canvas.add(imagenDeBloque)
    })
}
window.addEventListener("keydown",teclapresionada)
function teclapresionada(f) {

    keyPressed=f.keyCode
    console.log(keyPressed)
    if (keyPressed=="38"){
        arriba();
        console.log("arriba")
    }
    if (keyPressed=="40"){
        abajo();
        console.log("abajo")
    }
    if (keyPressed=="37"){
        izquierda();
        console.log("izquierda")
    }
    if (keyPressed=="39"){
        derecha();
        console.log("derecha")
    }
    if (keyPressed=="66"){
        nuevaimagen("camino.png")
        console.log("b")
    }
    if (keyPressed=="65"){
        nuevaimagen("casa.png")
        console.log("a")
    }
    if (keyPressed=="67"){
        nuevaimagen("casa 2.png")
        console.log("c")
    }
}
function arriba () {
    if (ultima_posicion_de_y >= 0){
        ultima_posicion_de_y=ultima_posicion_de_y - alto;
        canvas.remove(personaje);
        jugador()
    }
}
function abajo () {
    if (ultima_posicion_de_y <= 700){
        ultima_posicion_de_y=ultima_posicion_de_y + alto;
        canvas.remove(personaje);
        jugador()
    }
}
function izquierda () {
    if (ultima_posicion_de_x >= 0){
        ultima_posicion_de_x=ultima_posicion_de_x - ancho;
        canvas.remove(personaje);
        jugador()
    }
}
function derecha () {
    if (ultima_posicion_de_x <= 900){
        ultima_posicion_de_x=ultima_posicion_de_x + ancho;
        canvas.remove(personaje);
        jugador()
    }
}