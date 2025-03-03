function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}

function textos(){
    document.getElementById("textouno").innerHTML="cambio";
    document.getElementById("textodos").innerHTML="cambio";
    document.getElementById("textotres").innerHTML="cambio";
}

function verificarn(){
    const numero= document.getElementById("numero").value;
    if(numero>10){
        document.getElementById("resultados").innerHTML="es mayor";
    }
}

var usuario={
    nombre: "cesar",
    edad: 33,
    correo: "cesar@gmail.com"
}
function miobjeto(){
    
    document.getElementById("datos").innerHTML=`nombre: ${usuario.nombre} edad: ${usuario.edad} y correo ${usuario.correo}`;
}

function lista(){
    var notas=["miguel","santiago", "bechamel", "salsa", "tatiana", usuario.nombre];
    for(var i=0;i<notas.length; i++){
        document.getElementById("lalista").innerHTML+=`<li> ${notas[i]}</li>`
    }
}