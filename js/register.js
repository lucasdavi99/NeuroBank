/* Feito por Lucas Davi */

// FUNÇÃO PARA GUARDAR AS INFORMAÇÕES
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var fantasyName = document.getElementById('fantasyname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('numeroInput').value;
    var cnpj = document.getElementById('cpf').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    if (password.length < 6) {
        alert('A senha deve conter 6 caracteres ou mais!');
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = {
        fantasyName: fantasyName,
        email: email,
        number: number,
        cnpj: cnpj,
        password: password
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
    alert('Resgistrado com Sucesso!');
    window.location.href = "index.html"; 
});


// FUNÇÃO PARA MASCARAR O NÚMERO DE CELULAR
function formatarNumero() {
    var numeroInput = document.getElementById("numeroInput");
    var numero = numeroInput.value;

    numero = numero.replace(/\D/g, "");

    var formatado = "(" + numero.substr(0, 2) + ") " + numero.substr(2, 5) + "-" + numero.substr(7);

    numeroInput.value = formatado;
}

//FUNÇÃO PARA MASCARAR O CPF        
function mascararCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
  }

  var inputCPF = document.getElementById('cpf');

  inputCPF.addEventListener('input', function() {
    var cpf = inputCPF.value;
    var cpfMascarado = mascararCPF(cpf);
    inputCPF.value = cpfMascarado;
  });
