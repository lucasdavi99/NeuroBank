function imprimir() {
    // Selecionar a parte do HTML que deseja imprimir
    var elementoParaImprimir = document.getElementById('parteParaImprimir');

    // Criar uma nova janela para imprimir
    var janelaImprimir = window.open('', '_blank', 'width=600,height=600');

    // Escrever o HTML que deseja imprimir na nova janela
    janelaImprimir.document.open();
    janelaImprimir.document.write('<html><head><title>Imprimir</title></head><body>');
    janelaImprimir.document.write(elementoParaImprimir.innerHTML);
    janelaImprimir.document.write('</body></html>');
    janelaImprimir.document.close();

    // Chamar o comando de impressão na nova janela
    janelaImprimir.print();
  }

  function exportToPDF() {
    var doc = new jsPDF();
    var elementHTML = $('body').html();
    var specialElementHandlers = {
      '#elementH': function (element, renderer) {
        return true;
      }
    };
    doc.fromHTML(elementHTML, 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    });

    doc.save('extrato.pdf');
  }