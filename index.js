function encriptar() {
    let Texto = document.getElementById("Texto").value;
    let tituloMensaje = document.getElementById("título-mensaje");
    let parrafo = document.getElementById("parrafo")
    let muñeco = document.getElementById("Muñeco");

    let textocifrado = Texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if (document.getElementById("Texto").value.lenght != 0) {
        document.getElementById("Texto").value = textocifrado;
        document.getElementById("título-mensaje").textocifrado = "Texto encriptado con exito";
        document.getElementById("parrafo").textContent = "";
        document.getElementById("muñeco").src = "./img/encriptado.png";
    
    }else {
        document.getElementById("muñeco").src = "./img/encriptado.png";
        alert("Debes ingresar texto aquí");
    }
}