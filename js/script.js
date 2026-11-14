// Seleciona os elementos principais no DOM através de suas classes
const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

// Adiciona um evento de clique para o botão "Próximo" (seta direita)
nextButton.addEventListener('click', () => {
    // Pega a largura exata visível do container da imagem
    const slideWidth = track.clientWidth; 

    // Verifica se chegou na última imagem. Se sim, volta para a primeira (loop).
    // Se não chegou, rola para a próxima imagem somando a largura do slide.
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
});

// Adiciona um evento de clique para o botão "Anterior" (seta esquerda)
prevButton.addEventListener('click', () => {
    // Pega a largura exata visível do container da imagem
    const slideWidth = track.clientWidth;

    // Verifica se está na primeira imagem. Se sim, vai direto para a última.
    // Se não, recua o valor de uma largura de slide.
    if (track.scrollLeft <= 0) {
        track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
});