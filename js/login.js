/* Feito por Lucas Davi */

// FUNÇÃO PARA PEGAR O USUARIO REGISTRADO E FAZER O LOGIN
document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault();

  var cnpj = document.getElementById('cpf').value;
  var password = document.getElementById('password').value;

  var users = JSON.parse(localStorage.getItem('users')) || [];

  var user = users.find(function(user) {
      return user.cnpj === cnpj && user.password === password;
  });

  if (!user) {
      alert('CPF ou senha incorretos!');
      return;
  }

  
  localStorage.setItem('loggedUser', JSON.stringify(user));
  window.location.href = "analise-risco.html"; 
});

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
