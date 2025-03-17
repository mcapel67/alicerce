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


const ratingStars = document.querySelectorAll('.star');
const userVoteKey = 'user_voted_movie';
const averageRating = document.getElementById('averageRating');
const averageStars = document.getElementById('averageStars');

// Média inicial (simulada) de votos
let currentAverage = 4.0; // Média inicial
let totalVotes = 2; // Total de votos simulados
let totalSum = 8; // Soma dos votos simulados (ex: 4+4)

// Função para atualizar a média de votos
function updateAverageRating() {
    // Calculando a média com base no total de votos
    let average = totalSum / totalVotes;

    // Definindo o número de estrelas preenchidas com base na média
    const fullStars = Math.floor(average);
    const emptyStars = 5 - fullStars;
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★'; // Estrela cheia
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆'; // Estrela vazia
    }

    // Exibir as estrelas e a média
    averageStars.textContent = stars;
    averageRating.textContent = `Média de Votos: ${stars} (${average.toFixed(1)}/5)`;
}

// Atualizar a média de votos ao carregar a página
updateAverageRating();

// Verificar se o usuário já votou
const userVote = localStorage.getItem(userVoteKey);
if (userVote) {
    // Caso já tenha votado, desabilitar as estrelas
    ratingStars.forEach(star => {
        star.style.pointerEvents = 'none';
    });

    // Marcar as estrelas com base na votação anterior
    ratingStars.forEach(star => {
        if (parseInt(star.getAttribute('data-value')) <= userVote) {
            star.classList.add('selected');
        }
    });
}

// Lidar com a seleção de estrelas
ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const selectedValue = star.getAttribute('data-value');
        
        // Marcar as estrelas selecionadas
        ratingStars.forEach(s => {
            if (s.getAttribute('data-value') <= selectedValue) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });

        // Salvar a votação no localStorage para impedir múltiplos votos
        localStorage.setItem(userVoteKey, selectedValue);

        // Atualizar os votos simulados
        totalVotes += 1;
        totalSum += parseInt(selectedValue);
        updateAverageRating();
    });

    // Estilo de hover
    star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-value');
        ratingStars.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('hover');
            } else {
                s.classList.remove('hover');
            }
        });
    });

    star.addEventListener('mouseout', () => {
        ratingStars.forEach(s => s.classList.remove('hover'));
    });
});

// Seleção dos elementos
const openPopupBtn = document.getElementById('openTrailerBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('trailerPopup');

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


