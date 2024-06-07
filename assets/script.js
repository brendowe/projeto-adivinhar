const botao = document.getElementsByClassName('btn');
const imagem = document.getElementsByClassName('img');


function numeroAleatorio() {
    const numero = Math.floor(Math.random() *3);
    return numero;
}


botao[0].addEventListener('click', function(e) {
    e.preventDefault
    if(numeroAleatorio() == 0) {
        alert('oi')
    } else (alert('errou'))
})


botao[1].addEventListener('click', function(e) {
    e.preventDefault
    if(numeroAleatorio() == 1) {
        alert('acerto')
    } else (alert('errou'))
})


botao[2].addEventListener('click', function(e) {
    e.preventDefault
    if(numeroAleatorio() == 2) {
        alert('obaobai')
    } else (alert('errou'))
})

