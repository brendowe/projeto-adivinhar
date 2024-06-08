const botao = document.getElementsByClassName('btn');
const imagem = document.getElementById('img');


function numeroAleatorio() {
    const numero = Math.floor(Math.random() *3);
    return numero;
}


botao[0].addEventListener('click', function(e) {
    e.preventDefault
    if(numeroAleatorio() == 0) {
        imagem.src = "assets/images/acertou.jpg";
    } else (imagem.src = "assets/images/errou.jpeg");
    resetar()
})


botao[1].addEventListener('click', function(e) {
    e.preventDefault
    if(numeroAleatorio() == 1) {
        imagem.src = "assets/images/acertou.jpg";
    } else (imagem.src = "assets/images/errou.jpeg");
    resetar()
})


botao[2].addEventListener('click', function(e) {
    e.preventDefault
    if(numeroAleatorio() == 2) {
        imagem.src = "assets/images/acertou.jpg";
    } else (imagem.src = "assets/images/errou.jpeg");
    resetar()
})



function resetar() {
    setTimeout(() => {
        imagem.src = "assets/images/pensando.jpg";
    }, 2000)
}