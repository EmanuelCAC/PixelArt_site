var cor = 'ffffff.jpg'; //O site inicia com essa cor seleciona (branco)
var emcima; //Variavel para ver se o mouse esta em cima do pixel
var a = 40; //O tamanha de cada pixel


//Vê se o mouse esta em cima do pixel
function mouseEmCima() {
    emcima = true;
}

//Vê quando o mouse sai de cima do pixel
function mouseSaiuDeCima() {
    emcima = false;
}

//Quando alguem clicar, se o mouse estivem em cima de um pixel, o código vai pegar o id daquele pixel e depois vai mudar a cor dele
function apertouMouse(id) {
    if (emcima == true){
        document.getElementById(id).setAttribute('src', 'img/'+cor)
    };
}

//Muda a cor selecionada
function selecionarCor(code) {
    cor = code;
    console.log(cor)
}

//Troca todas as cores dos pixels para branco
function resetar() {
    for (let i = 1; i <= 256; i++) {
        document.getElementById(i).setAttribute('src', 'img/ffffff.jpg')
    }
}

//Aumenta o tamanho dos pixels
function aproximar() {
    a = a + 10;
    for (let i = 1; i <= 256; i++) {
        img = document.getElementById(i)
        img.style.height = a + 'px';
        img.style.width = a + 'px';
    }
}

//Diminui o tamanho dos pixels
function afastar() {
    a = a - 10;
    for (let i = 1; i <= 256; i++) {
        img = document.getElementById(i)
        img.style.height = a + 'px';
        img.style.width = a + 'px';
    }
}

//Muda todas as cores dos pixels para a cor selecionada
function preencher() {
    for (let i = 1; i <= 256; i++) {
        document.getElementById(i).setAttribute('src', 'img/'+cor)
    }
}