// Dark mode toggle
const darkModeToggle = document.querySelector('#darkModeToggle'); // Corrigido o ID
const body = document.body;

// Carregar preferência de dark mode
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
}

// Alternar dark mode
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Transição suave ao carregar a página
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

// Transições suaves para elementos visíveis durante o scroll
const scrollElements = document.querySelectorAll('.scroll-animation');

function onScroll() {
  scrollElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScroll);
onScroll(); // Executar imediatamente para mostrar elementos que já estão visíveis

// Slider automático de destaques
document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  // Função para avançar para o próximo slide
  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Volta ao primeiro slide quando chegar ao último
    const offset = -currentIndex * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
  }

  // Definir intervalo de troca de slides (cada 5 segundos)
  setInterval(moveToNextSlide, 5000);
});

// Adicionar sombra à navbar ao rolar a página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Funcionalidade do menu responsivo
const menuToggle = document.querySelector('#menuToggle');
const navList = document.querySelector('#nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  const jogosLista = document.querySelector('#jogos-lista');
  const jogos = [
    {
      timeAdversario: "Adecas",
      data: "20/04/2025",
      hora: "16:00",
      local: "Estádio Manuel Lima",
      backgroundImage: "url('img/jogo-1.jpg')" // Adicione a URL da imagem de fundo
    },
    {
      timeAdversario: "Futebol Clube da Vila",
      data: "27/04/2025",
      hora: "18:00",
      local: "Estádio da Vila",
      backgroundImage: "url('img/jogo-2.jpg')" // Outra imagem de fundo
    },
    {
      timeAdversario: "Club de Futebol",
      data: "03/05/2025",
      hora: "14:30",
      local: "Estádio Municipal de Monção",
      backgroundImage: "url('img/jogo-3.jpg')" // Mais uma imagem
    }
  ];

  jogos.forEach(jogo => {
    const jogoItem = document.createElement('li');
    jogoItem.classList.add('jogo-item');
    jogoItem.style.backgroundImage = jogo.backgroundImage; // Aplica a imagem de fundo

    jogoItem.innerHTML = `
      <div class="jogo-info">
        <h3>Desportivo de Monção vs ${jogo.timeAdversario}</h3>
        <div>
          <p class="jogo-local">${jogo.local}</p>
          <p class="jogo-data">Data: ${jogo.data}</p>
          <p class="jogo-hora">Hora: ${jogo.hora}</p>
        </div>
      </div>
    `;

    jogosLista.appendChild(jogoItem);
  });
});




