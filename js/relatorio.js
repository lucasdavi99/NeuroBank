
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
  
