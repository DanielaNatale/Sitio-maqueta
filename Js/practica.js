var escribiendo = document.getElementById("mensaje");

    escribiendo.addEventListener("input", function(){
        var mensaje = document.getElementById("mensaje").value;
        var caracteres = mensaje.length;
        var contador = document.getElementById("cuantoscaracteres");
        contador.innerText = `Caracteres utilizados: ${caracteres} `
    });


///////////////////////////////////////////////////////

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
}

 //////////////////////////////////////////////////////////////////////

 function MensajeGracias(){
    const mensaje = document.getElementById('gracias');
    mensaje.style.display = 'none';
}

setTimeout(MensajeGracias, 5000);