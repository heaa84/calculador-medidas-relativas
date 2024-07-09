let porcentajeAncho=document.querySelector(".porcentaje__ancho");
let porcentajeAlto=document.querySelector(".porcentaje__alto");


document.querySelector(".formula").innerHTML=`formula : medida elemento / medida contenedor * 100`

function convertir() {
    let numeroAncho_cont=document.querySelector(".input__ancho__contenedor").value ;
    let numeroAncho_element=document.querySelector(".input__ancho__elemento").value ;
    let numeroAlto_cont=document.querySelector(".input__alto__contenedor").value ;
    let numeroAlto_element=document.querySelector(".input__alto__elemento").value ;
    
    porcentajeAncho.innerHTML=(numeroAncho_element/numeroAncho_cont*100);
    porcentajeAlto.innerHTML=(numeroAlto_element/numeroAlto_cont*100);
}
   

