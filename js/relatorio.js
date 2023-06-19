
    function imprimir() {
      // Selecionar a parte do HTML que deseja imprimir
      var elementoParaImprimir = document.getElementById('container');

      // Criar uma nova janela para imprimir
      var janelaImprimir = window.open('', '_blank', 'width=1250,height=1000');

      // Escrever o HTML que deseja imprimir na nova janela
      janelaImprimir.document.open();
      janelaImprimir.document.write('<html><body><div><table><thead><tr><th>');
      janelaImprimir.document.write(elementoParaImprimir.innerHTML);
      janelaImprimir.document.write('</th></tr></thead></table></div></body></html>');
      janelaImprimir.document.close();

      // Chamar o comando de impressão na nova janela
      janelaImprimir.print();
    }

    const themeToggler = document.querySelector('#theme-toggler');
const htmlElement = document.querySelector('html');


themeToggler.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-theme');
    themeToggler.classList.toggle('#theme-toggler');
});


function increaseFontSize() {
  // Obtém todos os elementos no documento
  var allElements = document.getElementsByTagName('*');
  
  // Itera sobre cada elemento
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    
    // Obtém o valor atual da propriedade de tamanho de fonte
    var currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    
    // Aumenta o tamanho da fonte em 1 pixel
    var newFontSize = currentFontSize + 0.2;
    
    // Obtém o valor atual da largura e altura do elemento
    var currentWidth = parseFloat(window.getComputedStyle(element).width);
    var currentHeight = parseFloat(window.getComputedStyle(element).height);
    
    // Aumenta a largura e altura em 10 pixels
    var newWidth = currentWidth + 1;
    var newHeight = currentHeight + 0.5;
    
    element.style.fontSize = newFontSize + 'px';
    element.style.width = newWidth + 'px';
    element.style.height = newHeight + 'px';
  }
}

s
  
