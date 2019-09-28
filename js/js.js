
function changeSection(articulo) {

    if( articulo == 0){
        document.getElementById("fotoInicio").style.top="150px";
        document.getElementById("fotoInicio").style.width="600px";
    }else{
            document.getElementById("fotoInicio").style.top="30px";
            document.getElementById("fotoInicio").style.width="80px";
    }

    var articulos = document.getElementsByTagName("article");
        for (i in articulos){
        articulos[i].style.opacity="0";
        articulos[articulo].style.opacity="1";
    }
}

function dropdown(){
var desplegable = document.getElementsByClassName("dropdown");
if (desplegable[0].style.height!="400px"){
    desplegable[0].style.height="400px";
    document.getElementsByClassName("menu")[1].style.opacity=0;
    document.getElementsByClassName("menu")[0].style.opacity=1;}
else{ desplegable[0].style.height="0px";
document.getElementsByClassName("menu")[1].style.opacity=1;
document.getElementsByClassName("menu")[0].style.opacity=0;}
}

function cerrarTodo(){
    if(document.getElementsByClassName("dropdown")[0]!="0px"){
        document.getElementsByClassName("dropdown")[0].style.height="0px";
        document.getElementsByClassName("menu")[1].style.opacity=1;
        document.getElementsByClassName("menu")[0].style.opacity=0;
    }
}



function transiciones (){
    try{
    var transiciones = document.getElementsByTagName("article");
    for (i in transiciones){
        transiciones[i].style.transition="opacity 1.5s";    }
    }catch{}
}

function abrirFormulario(){
    if (document.getElementsByTagName("footer")[0].style.height!="85vh"){
        document.getElementsByTagName("footer")[0].style.animationName="bounceInUp";
        document.getElementsByTagName("footer")[0].style.height="85vh";
    }else{
        document.getElementsByTagName("footer")[0].style.height="70px";
        document.getElementsByTagName("footer")[0].style.animationName="";

    }
}


function paraTrabajo(){
    document.getElementsByClassName("motiv")[1].style.height = "605px";
    document.getElementsByClassName("motiv")[0].style.height = "0px";
}

function paraOtros(){
    document.getElementsByClassName("motiv")[1].style.height = "0px";
    document.getElementsByClassName("motiv")[0].style.height = "400px";
}


$(document).ready(function() {




})