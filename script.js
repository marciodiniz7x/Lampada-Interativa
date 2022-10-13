let click = false;
let quebrar = true;
let lamp = document.querySelector("#lamp");
let texto = document.querySelector("#text");
let fundo = document.querySelector("#fundo");
let aviso = document.querySelector("section#aviso");
let botao = document.querySelector("#botao");

function ligaDesliga() {
    if (click === false && contador < 3) {
        fundo.style.background = 'url(/images/backon.jpg)'
        texto.innerHTML = "<p>Você <span style='color:gold;' > acendeu a luz</span>... Cuidado com a conta de energia! </p>";
        click = true;
        if (normal === true) {
            lamp.src = "/images/lamp-lig.png";
            botao.innerHTML = "Desligar"
        } else if (aqua === true ) {
            lamp.src = "/images/lamp-aqua.png";
            botao.innerHTML = "Desligar"
        } else if (rosa === true) {
            lamp.src = "/images/lamp-rosa.png";
            botao.innerHTML = "Desligar"
        } else if (roxo === true) {
            lamp.src = "/images/lamp-roxo.png";
            botao.innerHTML = "Desligar"
        } else if (verde === true) {
            lamp.src = "/images/lamp-verde.png";
            botao.innerHTML = "Desligar"
        }

    } else if (click === true && contador < 3) {
        lamp.src = "/images/lamp-desl.png";
        botao.innerHTML = "Ligar"
        texto.innerHTML = "<p>Você <span style='color:pink;' >apagou a luz</span>... Isso vai te ajudar a economizar energia!</p>"
        fundo.style.background = "url(/images/backoff.jpg)"
        click = false

    } else {
        texto.innerHTML = `<p> A lâmpada <span style="color:red";> QUEBROU</span>! Não vai mais ligar...</p>`;
    }

}

let contador = 0;
let botaoTrocar = document.querySelector('#trocar')

function contaClique() {
    contador = contador + 1;
    
    if (contador === 1) {
        texto.innerHTML = `<p>Lâmpada é algo<span style="color:#68aefd";> frágil</span>. Cuidado ao manusear...</p>`;
    } else if (contador === 2) {
        texto.innerHTML = `<p><span style="color:red";> CUIDADO! </span>Você vai acabar <span style='color:violet'>quebrando</span>!</p>`;
    } else if (contador === 3) {
        lamp.src = "/images/lamp-trinc.png";
        texto.innerHTML = `<p><span style="color:pink";> Eu avisei </span>... A lâmpada foi <span style="color:red";> danificada</span>. É melhor trocar!</p>`;
        fundo.style.background = "url(/images/backoff.jpg)";
        botaoTrocar.style.opacity = '100%';

    } else if (contador > 3) {
        lamp.src = "/images/lamp-quebrada.png";
        fundo.style.background = "url(/images/backoff.jpg)"
        texto.innerHTML = `<p><span style="color:red";> ÓTIMO!</span> Agora não tem mais conserto...</p> `;
        botaoTrocar.style.opacity = '100%';
    }

}

let normal = document.querySelector('#normal')
let aqua = document.querySelector('#aqua')
let rosa = document.querySelector('#rosa')
let roxo = document.querySelector('#roxo')
let verde = document.querySelector('#verde')


normal = true
aqua = false;
rosa = false;
roxo = false;
verde = false

function botao1() {
    normal = true;
    aqua = false;
    rosa = false;
    roxo = false;
    verde = false
    if (click === true && contador < 3) {
        lamp.src = "/images/lamp-lig.png";
    }
}

function botao2() {
    normal = false;
    aqua = true;
    rosa = false;
    roxo = false;
    verde = false
    if (click === true && contador < 3) {
        lamp.src = "/images/lamp-aqua.png";
    }
}

function botao3() {
    normal = false;
    aqua = false;
    rosa = true;
    roxo = false;
    verde = false
    if (click === true && contador < 3) {
        lamp.src = "/images/lamp-rosa.png";
    }
}

function botao4() {
    normal = false;
    aqua = false;
    rosa = false;
    roxo = true;
    verde = false
    if (click === true && contador < 3) {
        lamp.src = "/images/lamp-roxo.png";
    }
}

function botao5() {
    normal = false;
    aqua = false;
    rosa = false;
    roxo = false;
    verde = true;
    if (click === true && contador < 3) {
        lamp.src = "/images/lamp-verde.png";
    }
}



let troca = false;
function trocar() {
    troca = true;
    if (contador >= 3 && troca === true) {
        lamp.src = "/images/lamp-desl.png";
        contador = 0;
        click = false;
        botaoTrocar.style.opacity = '0%'
        texto.innerHTML = `<p>Você <span style='color:violet';>TROCOU</span> a lâmpada. Interaja com <span style='color:red';>CUIDADO</span> agora!</p>`
    } else {


    }

}



