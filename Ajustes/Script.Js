  
// jS. NAVBAR //
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }
  
  const slides = document.querySelector('.slides');
  const buttons = document.querySelectorAll('.control-btn');
  const slideCount = document.querySelectorAll('.slide').length;
  let currentIndex = 0;
  let intervalId;

  const updateSlidePosition = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveButton();
  };

  const updateActiveButton = () => {
    buttons.forEach((btn, index) => {
      btn.classList.toggle('active', index === currentIndex);
    });
  };

  const moveToSlide = (index) => {
    currentIndex = index;
    updateSlidePosition();
    stopAutoSlide();
    startAutoSlide();
  };

  const startAutoSlide = () => {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlidePosition();
    }, 5000); // Muda a cada 3 segundos
  };

  const stopAutoSlide = () => {
    clearInterval(intervalId);
  };

  slides.addEventListener('mouseover', stopAutoSlide);
  slides.addEventListener('mouseout', startAutoSlide);

  startAutoSlide();

function showSlide(index) {
  const slides = document.querySelectorAll('.perso-slide');
  const totalSlides = slides.length;

  // Ajusta o índice para garantir que esteja dentro do intervalo válido
  if (index < 1) {
    index = totalSlides;
  } else if (index > totalSlides) {
    index = 1;
  }

  // Remove a classe 'active' de todos os slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Adiciona a classe 'active' ao slide correspondente
  slides[index - 1].classList.add('active');
}

// Inicializa o primeiro slide como ativo
document.addEventListener('DOMContentLoaded', () => {
  showSlide(1);
});


function mostrarTexto(imagemId) {
  const texto = document.getElementById(`texto-${imagemId}`);
  texto.style.display = 'block';  // Torna o texto visível
}

function esconderTexto(imagemId) {
  const texto = document.getElementById(`texto-${imagemId}`);
  texto.style.display = 'none';  // Esconde o texto
}



