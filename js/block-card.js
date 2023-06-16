var bloqueado = false;
    var imagem = document.getElementById('card-image');
    var botao = document.querySelector('.card-button button');

    function alternarBloqueio() {
      bloqueado = !bloqueado;
      if (bloqueado) {
        imagem.style.filter = 'grayscale(100%)';
        botao.textContent = 'Desbloquear';
      } else {
        imagem.style.filter = 'none';
        botao.textContent = 'Bloquear';
      }
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
    }
  }