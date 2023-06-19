function updateActiveUser() {
    var loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      var firstTwoNames = getFirstTwoNames(loggedUser.fantasyName);
  
      // Atualiza o elemento .active-user
      var activeUserSpan = document.querySelector(".active-user");
      if (activeUserSpan) {
        activeUserSpan.textContent = firstTwoNames;
      }
  
      // Atualiza elementos <p> com a classe 'active-user'
      var pElements = document.querySelectorAll("p.active-user");
      for (var i = 0; i < pElements.length; i++) {
        pElements[i].textContent = firstTwoNames;
      }
  
      // Atualiza elementos <td> com a classe 'active-user'
      var tdElements = document.querySelectorAll("td.active-user");
      for (var j = 0; j < tdElements.length; j++) {
        tdElements[j].textContent = firstTwoNames;
      }
    }
  
    // Atualiza o estado do modo escuro no localStorage
    localStorage.setItem(
      "darkModeEnabled",
      htmlElement.classList.contains("dark-theme")
    );
  }
  
  // Recupera o estado do modo escuro do localStorage
  const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  
  // Define o estado inicial do modo escuro
  const htmlElement = document.querySelector("html");
  const themeToggler = document.querySelector("#theme-toggler");
  
  if (isDarkModeEnabled) {
    htmlElement.classList.add("dark-theme");
    themeToggler.classList.add("active");
  }
  
  themeToggler.addEventListener("click", () => {
    htmlElement.classList.toggle("dark-theme");
    themeToggler.classList.toggle("active");
    updateActiveUser();
  });
  

function getFirstTwoNames(fullName) {
    var names = fullName.split(' ');
    if (names.length >= 2) {
        return names[0] + ' ' + names[1];
    } else {
        return fullName; // Retorna o nome completo se não houver um segundo nome
    }
}

document.addEventListener('DOMContentLoaded', updateActiveUser);

