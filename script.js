window.onload = function (){
    let modal = document.getElementById('pop-up');
    modal.showModal();
    
    let botaoFechar = document.getElementById('fechar-modal');
    botaoFechar.onclick = function (){
        modal.close();
    }
}

function fechar(){
    let botaoFechar = document.getElementById('fechar-modal');
    botaoFechar.close();
}

function criptografar(){
    let areaTexto = document.getElementById('texto').value;
    let textRecebido = areaTexto.replace(/a/g, "ai")
                                .replace(/e/g, "enter")
                                .replace(/i/, "imes")
                                .replace(/o/, "ober")
                                .replace(/u/, "ufat")
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = textRecebido;
}

function descriptografar(){
    let textoAside = document.getElementById('texto').value;
    let textoCriptografado = textoAside.replace(/ai/g, "a")
                                       .replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u")
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = textoCriptografado;
}