const textArea = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".textoResultado");

function botonEncrip() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let baseProyecto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.tolowerCase();

    for (let i = 0; i < baseProyecto.length; i++) {
        if(stringEncriptada.includes(baseProyecto[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(baseProyecto[i][0], baseProyecto[i][1])
        }
    }
    return stringEncriptada;
}