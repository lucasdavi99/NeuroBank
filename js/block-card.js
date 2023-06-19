var bloqueado = false;
var svgList = [
  "img/Group 3 2.svg",
  "img/Group 3  3.svg",
  "img/Group 31.svg",
  "img/Group 3  4.svg",
  "img/Group 3  5.svg",
  "img/Group 3  6.svg",
  "img/Group 3-virtual-card.svg",
];
var imagem = document.getElementById("card-image");
var botao = document.querySelector(".card-button button");

function alternarBloqueio() {
  bloqueado = !bloqueado;
  if (bloqueado) {
    imagem.style.filter = "grayscale(100%)";
    botao.textContent = "Desbloquear";
  } else {
    imagem.style.filter = "none";
    botao.textContent = "Bloquear";
  }
}

function gerarNovoCartao() {
  var indice = Math.floor(Math.random() * imagens.length);
  var novoSVG = imagens[indice];
  imagem.setAttribute("src", novoSVG);
}

function toggleBlock() {
  var image = document.getElementById("card-virtual-image");
  var blockButton = document.getElementById("block-button");

  if (image.style.filter === "grayscale(100%)") {
    // Desbloqueia a imagem
    image.style.filter = "none";
    blockButton.innerText = "Bloquear";
  } else {
    // Bloqueia a imagem
    image.style.filter = "grayscale(100%)";
    blockButton.innerText = "Desbloquear";
  }
}

var currentIndex = 0;

function toggleDelete() {
  var image = document.getElementById("card-virtual-image");
  var deleteButton = document.getElementById("delete-button");

  if (image.style.display === "none") {
    // Mostra a imagem
    image.style.display = "block";
    deleteButton.innerText = "Excluir Cartão";
  } else {
    // Esconde a imagem
    image.style.display = "none";
    deleteButton.innerText = "Novo cartão";

    currentIndex = (currentIndex + 1) % svgList.length; // Calcula o próximo índice cíclico

    // Obtém o próximo SVG da lista
    var nextSVG = svgList[currentIndex];

    // Atualiza o atributo "src" da imagem com o próximo SVG
    image.setAttribute("src", nextSVG);
  }
}





