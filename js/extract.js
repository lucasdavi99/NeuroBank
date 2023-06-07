/* Feito por Lucas Davi */

//FUNÇÃO PARA MUDAR A COR DE ACORDO COM A TRANSAÇÃO
const table = document.querySelector('table');
const tds = table.querySelectorAll('td');

tds.forEach(td => {
  const value = parseFloat(td.innerText.replace('R$ ', '').replace(',', '.'));

  if (value !== 0) {
    td.classList.add('value');

    if (value < 0) {
      td.classList.add('negative');
    }
  }
});


function exportToPDF() {
  var doc = new jsPDF();
  var elementHTML = $('#transactions').html();
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


/*                             MODAL                                 */

// Obter todas as imagens com a classe "detalhes"
var detalhesImagens = document.getElementsByClassName("detalhes");

// Função para formatar a data no formato DD/MM/YYYY
function formatDate(dateString) {
    var dateParts = dateString.split(" ");
    var day = dateParts[0];
    var monthAbbreviation = dateParts[1];
    
    var monthMapping = {
        "JAN": "01",
        "FEV": "02",
        "MAR": "03",
        "ABR": "04",
        "MAI": "05",
        "JUN": "06",
        "JUL": "07",
        "AGO": "08",
        "SET": "09",
        "OUT": "10",
        "NOV": "11",
        "DEZ": "12"
    };
    
    var month = monthMapping[monthAbbreviation];
    
    var year = new Date().getFullYear(); // Obter o ano atual
    var formattedDate = day + "/" + month + "/" + year;
    return formattedDate;
}

// Função para obter a hora atual no formato HH:MM
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var formattedTime = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;
    return formattedTime;
}

// Adicionar um evento de clique a cada imagem
for (var i = 0; i < detalhesImagens.length; i++) {
    detalhesImagens[i].addEventListener("click", function() {
        // Obter a linha pai da imagem clicada
        var row = this.parentNode.parentNode;

        // Obter os dados da linha
        var data = row.cells[0].innerText;
        var local = row.cells[1].innerText;
        var valor = row.cells[2].innerText;

        // Formatar a data para o formato completo
        var formattedDate = formatDate(data);
        
        // Obter a hora atual
        var currentTime = getCurrentTime();

        // Exibir os dados no pop-up
        document.getElementById("popup-data").innerHTML = "Data: " + formattedDate;
        document.getElementById("popup-hora").innerHTML = "Hora: " + currentTime;
        document.getElementById("popup-local").innerHTML = "Local: " + local;
        document.getElementById("popup-valor").innerHTML = "Valor: " + valor;

        // Mostrar o pop-up
        document.getElementById("popup").style.display = "block";
    });
}

// Fechar o pop-up quando o botão de fechar for clicado
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// Fechar o pop-up quando clicar fora dele
window.addEventListener("click", function(event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

