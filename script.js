const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const images = carousel.querySelectorAll('.carousel-inner img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let index = 0;

    function updateCarousel() {
        const width = images[0].clientWidth; // Largura de cada imagem
        carouselInner.style.transform = `translateX(${-index * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    // Atualiza o carrossel ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
});

