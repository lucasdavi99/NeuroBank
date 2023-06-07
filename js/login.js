/* Feito por Lucas Davi */

// FUNÇÃO PARA PEGAR O USUARIO REGISTRADO E FAZER O LOGIN
document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault();

  var cnpj = document.getElementById('cnpj').value;
  var password = document.getElementById('password').value;

  var users = JSON.parse(localStorage.getItem('users')) || [];

  var user = users.find(function(user) {
      return user.cnpj === cnpj && user.password === password;
  });

  if (!user) {
      alert('CNPJ ou senha incorretos!');
      return;
  }

  
  localStorage.setItem('loggedUser', JSON.stringify(user));
  window.location.href = "extract.html"; 
});
