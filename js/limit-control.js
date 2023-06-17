const slideValue = document.getElementById("alterar");
const inputSlider = document.getElementById("limiteRange");

inputSlider.oninput = (() => {
  let value = Math.min(inputSlider.value, 10000);
  slideValue.textContent = `R$: ${value.toLocaleString("pt-BR")},00`;
  slideValue.style.left = `${(value / 10000) * 100}%`;
});

// Função para salvar o valor do limite de crédito no localStorage
function salvarLimiteCredito() {
  const novoLimite = inputSlider.value;
  localStorage.setItem('limiteCredito', novoLimite);
  alert("Limite de crédito ajustado com sucesso!");
}

// Verificar se há dados salvos no localStorage durante o carregamento da página
window.addEventListener('load', () => {
  const limiteCreditoSalvo = localStorage.getItem('limiteCredito');

  if (limiteCreditoSalvo) {
    slideValue.textContent = `R$: ${limiteCreditoSalvo.toLocaleString("pt-BR")},00`;
    const posicaoSliderSalva = (limiteCreditoSalvo / 10000) * 100;
    slideValue.style.left = `${posicaoSliderSalva}%`;
    inputSlider.value = limiteCreditoSalvo;
  }
});

const btnAjustarLimite = document.getElementById('btnAjustarLimite');
btnAjustarLimite.addEventListener('click', salvarLimiteCredito);
