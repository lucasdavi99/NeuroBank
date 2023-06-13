function redirectToReactPage() {
    window.location.href = 'http://localhost:3000'; 
  }

  document.getElementById('login-button').addEventListener('click', redirectToReactPage);