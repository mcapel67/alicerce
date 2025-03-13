// Seleção dos elementos
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');

// Função para abrir o popup
openPopupBtn.addEventListener('click', function() {
    popup.style.display = 'flex';  // Exibe o popup
});

// Função para fechar o popup
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';  // Oculta o popup
});

// Fechar o popup ao clicar fora do conteúdo
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
