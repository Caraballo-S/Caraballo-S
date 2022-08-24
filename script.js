const inputTexto = document.querySelector(".textArea1")
const mensaje = document.querySelector(".mensaje")
let el = document.querySelector(".encriptar");
let el2 = document.querySelector(".desencriptar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";

}

function encriptar(stringTexto){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringTexto = stringTexto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringTexto.includes(matrizCodigo[i][0])){
            stringTexto = stringTexto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringTexto;
}

function btnDecencriptar(){
    const textoDecencriptado = decencriptar(inputTexto.value)
    mensaje.value = textoDecencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";

}

function decencriptar(stringTexto){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringTexto = stringTexto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringTexto.includes(matrizCodigo[i][0])){
            stringTexto = stringTexto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringTexto;
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}
