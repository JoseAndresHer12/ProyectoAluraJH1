const textArea = document.querySelector(".textoInicial");
const mensaje = document.querySelector(".textoFinal");
const botonCopiar = document.querySelector(".copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncripta = encriptar(textArea.value)
    mensaje.value = textoEncripta
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrisCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrisCodigo.length; i++){
        if(stringEncriptado.includes(matrisCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrisCodigo[i][0], matrisCodigo[i][1])
        }
    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoEncripta = desencriptar(textArea.value)
    mensaje.value = textoEncripta
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado){
    let matrisCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrisCodigo.length; i++){
        if(stringDesencriptado.includes(matrisCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrisCodigo[i][1], matrisCodigo[i][0])
        }
    }
    return stringDesencriptado
}

